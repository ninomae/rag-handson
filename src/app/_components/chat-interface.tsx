"use client";

import { useChat } from "ai/react";

export default function ChatInterface() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	return (
		<div className="flex flex-col h-[600px]">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`p-2 rounded ${
							message.role === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100"
						}`}
					>
						<p>{message.content}</p>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="p-4 border-t">
				<input
					type="text"
					value={input}
					onChange={handleInputChange}
					placeholder="Type your message..."
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<button
					type="submit"
					className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
				>
					Send
				</button>
			</form>
		</div>
	);
}
