import { compile } from "@mdx-js/mdx";

export async function compileMdx(source: string): Promise<string> {
  const compiled = await compile(source, {
    outputFormat: "function-body",
  });
  return String(compiled);
}
