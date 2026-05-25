import { readFile } from "node:fs/promises";
import path from "node:path";

export const htmlPages = new Map([
  ["about.html", "site/about.html"],
  ["communications.html", "subsidiaries/communications.html"],
  ["contact.html", "site/contact.html"],
  ["creative-academy.html", "subsidiaries/creative-academy.html"],
  ["executive-ayiri-oladunmoye.html", "executives/executive-ayiri-oladunmoye.html"],
  ["executive-evans-emmanuel.html", "executives/executive-evans-emmanuel.html"],
  ["executive-frank-pastorino.html", "executives/executive-frank-pastorino.html"],
  ["executive-ikenna-oguike.html", "executives/executive-ikenna-oguike.html"],
  ["executive-larisa-miller.html", "executives/executive-larisa-miller.html"],
  ["executive-linus-idahosa.html", "executives/executive-linus-idahosa.html"],
  ["index.html", "site/index.html"],
  ["life-africa.html", "subsidiaries/life-africa.html"],
  ["reskill-africa.html", "subsidiaries/reskill-africa.html"],
  ["technology.html", "subsidiaries/technology.html"],
  ["website-notes.html", "docs/website-notes.html"]
]);

export async function htmlResponse(fileName) {
  const pagePath = htmlPages.get(fileName);

  if (!pagePath) {
    return new Response("Not Found", { status: 404 });
  }

  const html = await readFile(path.join(process.cwd(), "html-pages", pagePath), "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
