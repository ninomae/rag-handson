import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { openai } from "@ai-sdk/openai";
import { QdrantClient } from "@qdrant/js-client-rest";
const model = openai.embedding("text-embedding-3-small", { dimensions: 512 });
const qdrantClient = new QdrantClient();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const data = await fs.readFile(path.resolve(__dirname, "./data.txt"), {
	encoding: "utf8",
});

const { embeddings } = await model.doEmbed({
	values: [data],
});

const points = embeddings.map((embedding, index) => {
	return {
		id: index,
		payload: {
			value: data[index],
		},
		vector: embedding,
	};
});

await qdrantClient.upsert("rag_hands_on", {
	points,
});
