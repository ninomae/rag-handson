"use server";

interface SearchResult {
	result: string;
}

export async function searchDocuments(query: string): Promise<SearchResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		result: "Document 1",
	};
}
