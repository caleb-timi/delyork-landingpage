import { readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

const htmlRoot = path.join(process.cwd(), "html-pages");

function collectHtmlPages(directory = htmlRoot) {
  const pages = new Map();

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      for (const [fileName, pagePath] of collectHtmlPages(entryPath)) {
        pages.set(fileName, pagePath);
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      const pagePath = path.relative(htmlRoot, entryPath);
      const pageRoute = pagePath.split(path.sep).join("/");

      pages.set(entry.name, pagePath);
      pages.set(pageRoute, pagePath);
      pages.set(`html-pages/${pageRoute}`, pagePath);
    }
  }

  return pages;
}

export const htmlPages = collectHtmlPages();

export async function htmlResponse(fileName) {
  const normalizedFileName = fileName?.replace(/^\/+/, "");
  const pagePath = htmlPages.get(normalizedFileName);

  if (!pagePath) {
    return new Response("Not Found", { status: 404 });
  }

  const html = await readFile(path.join(htmlRoot, pagePath), "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
