import { searchDocuments } from "../actions";

export default async function SearchResults({ query }: { query?: string }) {
	if (!query) {
		return null;
	}

	const results = await searchDocuments(query);

	return (
		<div>
			<h3 className="text-xl font-semibold mb-2">Search Results</h3>
			{results.length === 0 ? (
				<p>No results found.</p>
			) : (
				<ul className="space-y-2">
					{results.map((result) => (
						<li key={result.title} className="p-2 bg-gray-100 rounded">
							<h4 className="font-semibold">{result.title}</h4>
							<p className="text-sm">{result.snippet}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
