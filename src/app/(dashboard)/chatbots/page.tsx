"use client";

import React, { useState } from "react";
import Chatbot from "../Components/chatbot";

export default function ChatbotPage() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <main className="flex flex-col items-center justify-between bg-white">
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

      {showChatbot && <Chatbot />}
    </main>
  );
}