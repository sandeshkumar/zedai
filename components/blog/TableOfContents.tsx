"use client";

import { useState, useEffect } from "react";
import GithubSlugger from "github-slugger";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const items: TocItem[] = [];
  const slugger = new GithubSlugger();
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const level = match[0].indexOf(" ");
    const id = slugger.slug(text);
    items.push({ id, text, level });
  }

  return items;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const items = extractHeadings(content);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="sticky top-32">
      <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-text-dim mb-4">
        On This Page
      </h4>
      <ul className="space-y-2 border-l border-border-subtle">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block text-[0.8rem] leading-[1.5] transition-colors duration-200 border-l-2 -ml-px ${
                item.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === item.id
                  ? "border-accent text-accent"
                  : "border-transparent text-text-dim hover:text-text-subtle"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
