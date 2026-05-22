import { htmlResponse } from "./html-response";

export const dynamic = "force-dynamic";

export async function GET() {
  return htmlResponse("index.html");
}
