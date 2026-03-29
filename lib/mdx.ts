import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

export async function compileMdx(source: string): Promise<string> {
  const compiled = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
  });
  return String(compiled);
}
