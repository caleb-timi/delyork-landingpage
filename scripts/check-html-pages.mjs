import { access } from "node:fs/promises";
import path from "node:path";

await access(path.join(process.cwd(), "html-pages"));
