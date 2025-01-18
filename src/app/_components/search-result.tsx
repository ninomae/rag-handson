import { searchDocuments } from "../actions";

export default async function SearchResults({ query }: { query?: string }) {
	if (!query) {
		return null;
	}

	const { result } = await searchDocuments(query);

	return (
		<div>
			<h3 className="text-xl font-semibold mb-2">Your Query</h3>
			<h4 className="font-semibold">{query}</h4>
			<hr className="my-4" />
			<h3 className="text-xl font-semibold mb-2">RAG Response</h3>
			<h4 className="font-semibold">{result}</h4>
		</div>
	);
}
