import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "html-pages");
const entries = await readdir(root, { withFileTypes: true });

await mkdir(outputDir, { recursive: true });

await Promise.all(
  entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => copyFile(path.join(root, entry.name), path.join(outputDir, entry.name)))
);
