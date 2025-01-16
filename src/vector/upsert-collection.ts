import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { QdrantClient } from "@qdrant/js-client-rest";
const qdrantClient = new QdrantClient();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const data = await fs.readFile(path.resolve(__dirname, "./data.txt"), {
	encoding: "utf8",
});
console.log(data);
