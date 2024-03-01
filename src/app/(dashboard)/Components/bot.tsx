"use client";

import { useChat } from "ai/react"

const Bot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-5/6 w-1/4 mx-auto overflow-auto items-center justify-between bg-white shadow-lg rounded-lg">
      <div className="w-full text-left-top px-4 py-2">
        <span className="text-2xl font-bold text-black">GINIE</span>
        <hr className="mt-2 border-t border-gray-300" /> {/* Horizontal line added here */}
      </div>
      <div className="flex-grow p-4 overflow-auto">
        {messages.length > 0 ? messages.map((m) => (
          <div key={m.id} className={`flex items-end ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}> 
            <div className={`max-w-2/3 rounded-md ${m.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <div className="mb-3 max-w-prose rounded-md px-4 py-2 group-[.cb-dark]:bg-[#3f3f46] group-[.cb-light]:bg-[#f1f1f0] group-[.cb-dark]:text-white group-[.cb-light]:text-black">
                <span className="text-sm">{m.content}</span>
              </div>
            </div>
          </div>
        )) : <div className="py-2 px-4 rounded-md bg-gray-200 text-black">Hi! What can I help you with?</div>}
      </div>
      <form onSubmit={handleSubmit} className="w-full px-4 pb-4">
        <input
          className="w-full p-3 border border-gray-300 shadow"
          value={input}
          placeholder="Type your message..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Bot;