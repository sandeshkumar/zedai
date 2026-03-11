import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import matter from "gray-matter";
import { buildSystemPrompt, buildUserPrompt } from "./prompts/blog-system-prompt";

// ── Types ──────────────────────────────────────────────────────────────

interface Topic {
  id: string;
  category: string;
  title: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  contentType: string;
  schemaType: string;
  relatedServices: string[];
  indiaAngle: string;
  status: "planned" | "published";
  publishedAt: string | null;
  slug: string;
}

interface TopicsFile {
  nextCategoryIndex: number;
  categoryRotation: string[];
  topics: Topic[];
}

// ── Constants ──────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content/blog");
const TOPICS_PATH = path.join(ROOT, "content/topics.yaml");

const SERVICES = [
  { slug: "custom-websites", title: "Custom Websites" },
  { slug: "ecommerce-solutions", title: "eCommerce Solutions" },
  { slug: "mobile-apps", title: "Mobile Apps" },
  { slug: "erp-systems", title: "ERP Systems" },
  { slug: "crm-software", title: "CRM Software" },
  { slug: "hospitality-pos", title: "Hospitality & POS" },
  { slug: "ai-solutions", title: "AI Solutions" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "ui-ux-design", title: "UI/UX Design" },
  { slug: "cloud-devops", title: "Cloud & DevOps" },
  { slug: "maintenance-amc", title: "Maintenance & AMC" },
  { slug: "cybersecurity", title: "Cybersecurity" },
];

// ── Helpers ────────────────────────────────────────────────────────────

function getExistingPosts(): { slug: string; title: string; category: string }[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        category: data.category as string,
      };
    });
}

function loadTopics(): TopicsFile {
  const raw = fs.readFileSync(TOPICS_PATH, "utf-8");
  return yaml.load(raw) as TopicsFile;
}

function saveTopics(data: TopicsFile): void {
  const yamlStr = yaml.dump(data, {
    lineWidth: 120,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  });
  fs.writeFileSync(TOPICS_PATH, yamlStr, "utf-8");
}

function stripCodeFences(text: string): string {
  let cleaned = text.trim();
  if (cleaned.startsWith("```")) {
    const firstNewline = cleaned.indexOf("\n");
    cleaned = cleaned.slice(firstNewline + 1);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.slice(0, -3).trimEnd();
  }
  return cleaned;
}

// ── Validation ─────────────────────────────────────────────────────────

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validatePost(content: string, topic: Topic): ValidationResult {
  const errors: string[] = [];

  let parsed;
  try {
    parsed = matter(content);
  } catch {
    return { valid: false, errors: ["Failed to parse frontmatter"] };
  }

  const fm = parsed.data;
  const body = parsed.content;

  // Frontmatter checks
  if (!fm.title) errors.push("Missing title in frontmatter");
  if (!fm.slug) errors.push("Missing slug in frontmatter");
  if (!fm.publishedAt) errors.push("Missing publishedAt in frontmatter");
  if (!fm.excerpt) errors.push("Missing excerpt in frontmatter");
  if (!fm.category) errors.push("Missing category in frontmatter");
  if (!fm.tags || !Array.isArray(fm.tags)) errors.push("Missing or invalid tags");
  if (!fm.relatedServices || !Array.isArray(fm.relatedServices))
    errors.push("Missing or invalid relatedServices");

  // Validate category matches a valid service slug
  const validSlugs = SERVICES.map((s) => s.slug);
  if (fm.category && !validSlugs.includes(fm.category)) {
    errors.push(`Invalid category "${fm.category}" — must be a valid service slug`);
  }

  // Word count check
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  if (wordCount < 1500) {
    errors.push(`Word count too low: ${wordCount} (minimum 1500)`);
  }

  // H2 heading check (at least 3)
  const h2Matches = body.match(/^## /gm);
  if (!h2Matches || h2Matches.length < 3) {
    errors.push(`Too few H2 headings: ${h2Matches?.length || 0} (minimum 3)`);
  }

  // No H1 in body
  const h1Matches = body.match(/^# [^#]/gm);
  if (h1Matches && h1Matches.length > 0) {
    errors.push("Body contains H1 heading — only H2 and below allowed");
  }

  // Service link check
  if (!body.includes("/services/")) {
    errors.push("No internal links to service pages found");
  }

  // Target keyword in first 200 chars
  const first200 = body.slice(0, 200).toLowerCase();
  if (!first200.includes(topic.targetKeyword.toLowerCase())) {
    const keywordWords = topic.targetKeyword.toLowerCase().split(/\s+/);
    const first300 = body.slice(0, 300).toLowerCase();
    const found = keywordWords.filter((w) => first300.includes(w));
    if (found.length < keywordWords.length * 0.6) {
      errors.push("Target keyword not found near the beginning of the post");
    }
  }

  return { valid: errors.length === 0, errors };
}

// ── Main ───────────────────────────────────────────────────────────────

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    process.exit(1);
  }

  // Load topics
  const topicsData = loadTopics();
  const nextTopic = topicsData.topics.find((t) => t.status === "planned");

  if (!nextTopic) {
    console.log("No planned topics remaining. Add more topics to content/topics.yaml");
    process.exit(0);
  }

  console.log(`\nGenerating post: "${nextTopic.title}"`);
  console.log(`  Category: ${nextTopic.category}`);
  console.log(`  Keyword: ${nextTopic.targetKeyword}`);
  console.log(`  Type: ${nextTopic.contentType}\n`);

  // Get existing posts for internal linking
  const existingPosts = getExistingPosts();

  // Build prompts
  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(nextTopic, existingPosts, SERVICES);

  // Call Gemini API
  const ai = new GoogleGenAI({ apiKey });

  let mdxContent: string | null = null;
  let attempt = 0;
  const maxAttempts = 2;

  while (attempt < maxAttempts) {
    attempt++;
    console.log(`Attempt ${attempt}/${maxAttempts}...`);

    const contents: { role: string; parts: { text: string }[] }[] = [
      { role: "user", parts: [{ text: userPrompt }] },
    ];

    // If retry, add correction message
    if (attempt > 1 && mdxContent) {
      const validation = validatePost(mdxContent, nextTopic);
      contents.push(
        { role: "model", parts: [{ text: mdxContent }] },
        {
          role: "user",
          parts: [
            {
              text: `The generated post has validation errors:\n${validation.errors.map((e) => `- ${e}`).join("\n")}\n\nPlease fix these issues and output the complete corrected MDX file.`,
            },
          ],
        }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 8192,
        temperature: 0.7,
      },
      contents,
    });

    const text = response.text;
    if (!text) {
      console.error("No text content in response");
      continue;
    }

    mdxContent = stripCodeFences(text);

    // Validate
    const validation = validatePost(mdxContent, nextTopic);
    if (validation.valid) {
      console.log("Validation passed!");
      break;
    }

    console.log("Validation errors:");
    validation.errors.forEach((e) => console.log(`  - ${e}`));

    if (attempt >= maxAttempts) {
      console.error("\nMax attempts reached. Validation still failing.");
      process.exit(1);
    }
  }

  if (!mdxContent) {
    console.error("Failed to generate content");
    process.exit(1);
  }

  // Write the MDX file
  const outputPath = path.join(BLOG_DIR, `${nextTopic.slug}.mdx`);
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(outputPath, mdxContent, "utf-8");
  console.log(`\nWrote: ${outputPath}`);

  // Update topics.yaml
  const topicIndex = topicsData.topics.findIndex((t) => t.id === nextTopic.id);
  topicsData.topics[topicIndex].status = "published";
  topicsData.topics[topicIndex].publishedAt = new Date().toISOString().split("T")[0];
  saveTopics(topicsData);
  console.log("Updated topics.yaml");

  // Print stats
  const { content: body } = matter(mdxContent);
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  console.log(`\nStats:`);
  console.log(`  Words: ${wordCount}`);
  console.log(`  Slug: ${nextTopic.slug}`);
  console.log(`  Category: ${nextTopic.category}`);
  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
