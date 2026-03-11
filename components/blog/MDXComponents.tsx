import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function Heading2(props: ComponentPropsWithoutRef<"h2">) {
  const text = typeof props.children === "string" ? props.children : "";
  const id = slugify(text);
  return (
    <h2
      id={id}
      className="font-heading font-[800] text-[1.5rem] tracking-[-0.02em] mt-10 mb-4 scroll-mt-32"
      {...props}
    />
  );
}

function Heading3(props: ComponentPropsWithoutRef<"h3">) {
  const text = typeof props.children === "string" ? props.children : "";
  const id = slugify(text);
  return (
    <h3
      id={id}
      className="font-heading font-bold text-[1.2rem] mt-8 mb-3 scroll-mt-32"
      {...props}
    />
  );
}

function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return (
    <p className="text-text-subtle text-[0.95rem] leading-[1.8] mb-5" {...props} />
  );
}

function Anchor(props: ComponentPropsWithoutRef<"a">) {
  const href = props.href || "";
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
    />
  );
}

function UnorderedList(props: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-text-subtle text-[0.95rem] leading-[1.8]" {...props} />
  );
}

function OrderedList(props: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-text-subtle text-[0.95rem] leading-[1.8]" {...props} />
  );
}

function Blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="border-l-4 border-accent pl-5 my-6 italic text-text-subtle"
      {...props}
    />
  );
}

function Code(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className="bg-surface-card px-1.5 py-0.5 rounded text-[0.88rem] text-accent font-mono"
      {...props}
    />
  );
}

function Pre(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className="bg-surface-card border border-border-subtle rounded-[var(--radius-md)] p-5 overflow-x-auto mb-5 text-[0.85rem] leading-[1.7]"
      {...props}
    />
  );
}

function HorizontalRule() {
  return <hr className="border-border-subtle my-8" />;
}

function Image(props: ComponentPropsWithoutRef<"img">) {
  return (
    <img
      {...props}
      className="rounded-[var(--radius-md)] my-6 w-full"
      loading="lazy"
    />
  );
}

export const mdxComponents = {
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  hr: HorizontalRule,
  img: Image,
};
