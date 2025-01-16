import { QdrantClient } from "@qdrant/js-client-rest";

const qdrantClient = new QdrantClient();

await qdrantClient.createCollection("RAG_HANDS_ON", {
	vectors: { size: 512, distance: "Cosine" },
});
