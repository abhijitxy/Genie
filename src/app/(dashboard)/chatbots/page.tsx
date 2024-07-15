'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // useRouter from next/navigation
import { findManyChatbots } from "@/app/action";
import Chat from "../Components/chatbot";

// Define a type for chatbot
type Chatbot = {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function ChatbotPage() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);
  const router = useRouter(); // Initialize useRouter from next/navigation

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleChatbotClick = (id: number) => {
    router.push(`/integration/${id}`);
  };

  useEffect(() => {
    const fetchChatbots = async () => {
      const fetchedChatbots = await findManyChatbots();
      setChatbots(fetchedChatbots);
    };

    fetchChatbots();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between bg-gray-50 min-h-screen">
      {!showChatbot && (
        <div className="py-8 ml-auto mr-6">
          <button
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950"
            onClick={toggleChatbot}
          >
            New chatbot
          </button>
        </div>
      )}

      {showChatbot && (
        <div className="w-full max-w-md mx-auto mt-4 mb-6 p-4">
          <Chat />
        </div>
      )}

      <div className="absolute top-12 w-full max-w-3xl mx-auto py-4 rounded-lg left-72">
        <ul className="space-y-4">
          {chatbots.map((chatbot) => (
            <li
              key={chatbot.id}
              className="border border-gray-950 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleChatbotClick(chatbot.id)}
            >
              <h2 className="text-lg font-medium">{chatbot.name}</h2>
              <p className="text-sm text-gray-600">{chatbot.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}