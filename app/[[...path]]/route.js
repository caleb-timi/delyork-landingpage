import { readFile } from "node:fs/promises";
import path from "node:path";

const htmlPages = new Set([
  "about.html",
  "communications.html",
  "contact.html",
  "creative-academy.html",
  "executive-ayiri-oladunmoye.html",
  "executive-evans-emmanuel.html",
  "executive-frank-pastorino.html",
  "executive-ikenna-oguike.html",
  "executive-larisa-miller.html",
  "executive-linus-idahosa.html",
  "index.html",
  "life-africa.html",
  "reskill-africa.html",
  "technology.html",
  "website-notes.html"
]);

export const dynamic = "force-dynamic";

function resolveHtmlFile(segments = []) {
  const requestedPath = segments.join("/") || "index.html";
  const fileName = requestedPath === "index" ? "index.html" : requestedPath;

  if (!htmlPages.has(fileName)) {
    return null;
  }

  return fileName;
}

export async function GET(_request, context) {
  const params = await context.params;
  const fileName = resolveHtmlFile(params?.path);

  if (!fileName) {
    return new Response("Not Found", { status: 404 });
  }

  const html = await readFile(path.join(process.cwd(), "html-pages", fileName), "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
