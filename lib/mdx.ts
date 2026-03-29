import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export async function compileMdx(source: string): Promise<string> {
  const compiled = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });
  return String(compiled);
}
