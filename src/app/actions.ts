"use server";

interface SearchResult {
	title: string;
	snippet: string;
}

export async function searchDocuments(query: string): Promise<SearchResult[]> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return [
		{
			title: "Document 1",
			snippet: `This is a sample document that contains the query "${query}".`,
		},
		{
			title: "Document 2",
			snippet: `Another document matching the search term "${query}".`,
		},
	];
}
