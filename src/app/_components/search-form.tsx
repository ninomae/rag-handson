"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`/?q=${encodeURIComponent(query)}`);
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search documents..."
				className="w-full p-2 border border-gray-300 rounded"
			/>
			<button
				type="submit"
				className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Search
			</button>
		</form>
	);
}
