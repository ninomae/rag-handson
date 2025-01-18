"use server";

import { openai } from "@ai-sdk/openai";
import { QdrantClient } from "@qdrant/js-client-rest";
import { generateText } from "ai";

const model = openai.embedding("text-embedding-3-small", { dimensions: 512 });
const qdrantClient = new QdrantClient();

interface SearchResult {
	result: string;
}

export async function searchDocuments(query: string): Promise<SearchResult> {
	// 1. 入力した内容をベクトル化
	const { embeddings } = await model.doEmbed({
		values: [query],
	});

	// 2. ベクトルを使って類似ドキュメントを検索
	const similarDocuments = await qdrantClient.query("rag_hands_on", {
		query: embeddings[0],
		limit: 5,
		with_payload: true,
	});

	// 3. 類似ドキュメントを使って回答を生成
	const text = await generateText({
		model: openai("gpt-4o-mini"),
		prompt: `以下にユーザーの質問と類似ドキュメントを示します。
ユーザーの質問から、類似ドキュメントに対する回答を示してください。
		
### ユーザーの質問
${query}

### 類似ドキュメント		
${similarDocuments.points.map((doc) => doc.payload?.value).join("\n")}
`,
	});

	return {
		result: text.text,
	};
}
