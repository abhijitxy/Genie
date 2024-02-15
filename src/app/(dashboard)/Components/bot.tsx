"use client";

import React from 'react';

interface Message {
  id: number;
  role: 'user' | 'bot';
  content: string;
}

const Bot = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input,
    };
    setMessages([...messages, newMessage]);
    setInput('');
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now(),
        role: 'bot',
        content: 'This is a response from the bot.',
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto py-4 bg-white shadow-lg rounded-lg">
      <div className="flex-grow overflow-auto p-4">
        {messages.length > 0 ? messages.map((m) => (
          <div key={m.id} className={`flex items-end ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-2/3 p-3 my-2 rounded-full ${m.role === 'user' ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <span className="text-sm">{m.content}</span>
            </div>
          </div>
        )) : <div className="text-center text-gray-500">No messages yet</div>}
      </div>

      <form onSubmit={handleSubmit} className="w-full px-4 pb-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-full shadow"
          value={input}
          placeholder="Type your message..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Bot;