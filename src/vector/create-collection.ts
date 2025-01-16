import { QdrantClient } from "@qdrant/js-client-rest";

const qdrantClient = new QdrantClient();

await qdrantClient.createCollection("rag_hands_on", {
	vectors: { size: 512, distance: "Cosine" },
});
