import { Suspense } from "react";
import SearchForm from "./_components/search-form";
import SearchResults from "./_components/search-result";

export default async function Home({
	searchParams,
}: { searchParams: Promise<{ q?: string }> }) {
	const query = (await searchParams).q;
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">RAG System</h1>
			<div className="grid grid-cols-1 gap-6">
				<div>
					<h2 className="text-2xl font-semibold mb-4">Document Search</h2>
					<SearchForm />
					<Suspense fallback={<div>Loading results...</div>}>
						<SearchResults query={query} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
