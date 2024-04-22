"use client";

import { useChat } from "ai/react"

const Embed = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen w-full mx-auto overflow-hidden items-center justify-between bg-white shadow-lg rounded-lg">
      <div className="w-full text-left px-4 py-2 bg-black">
        <span className="text-2xl font-bold text-white">GENIE</span>
        <span className="block text-sm text-white opacity-75">Welcome!</span>
      </div>
      <div className="flex-grow p-4 overflow-auto">
        {messages.length > 0 ? messages.map((m) => (
          <div key={m.id} className={`flex items-end ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-2/3 rounded-lg shadow ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <div className="px-4 py-2">
                <span className="text-sm">{m.content}</span>
              </div>
            </div>
          </div>
        )) : <div className="py-2 px-4 rounded-lg bg-gray-200 text-black">Welcome to this awesome chat!</div>}
      </div>
      <form onSubmit={handleSubmit} className="w-full px-4 pb-4">
        <input
          className="w-full p-3 border border-gray-300 shadow rounded-full"
          value={input}
          placeholder="Type your message..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Embed;