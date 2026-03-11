"use client";

import { useState, useEffect } from "react";
import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

interface MDXContentProps {
  compiledSource: string;
}

export function MDXContent({ compiledSource }: MDXContentProps) {
  const [Content, setContent] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    (async () => {
      const { default: MDXComponent } = await run(compiledSource, {
        ...runtime,
        baseUrl: import.meta.url,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);
      setContent(() => MDXComponent as React.ComponentType<Record<string, unknown>>);
    })();
  }, [compiledSource]);

  if (!Content) return null;

  return (
    <div className="blog-content">
      <Content />
    </div>
  );
}
