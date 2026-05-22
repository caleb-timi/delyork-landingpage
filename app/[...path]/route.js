import { htmlResponse } from "../html-response";

export const dynamic = "force-dynamic";

function resolveHtmlFile(segments = []) {
  const requestedPath = segments.join("/");

  if (!requestedPath) {
    return "index.html";
  }

  if (requestedPath === "index") {
    return "index.html";
  }

  if (requestedPath.endsWith(".html")) {
    return requestedPath;
  }

  return `${requestedPath}.html`;
}

export async function GET(_request, context) {
  const params = await context.params;
  return htmlResponse(resolveHtmlFile(params?.path));
}
