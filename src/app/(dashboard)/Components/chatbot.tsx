'use client';

import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
import { createChatbot } from "@/app/action";
import React, { useState } from "react";

const Chat = () => {
  const router = useRouter();
  const [chatbotName, setChatbotName] = useState("");
  const [chatbotDescription, setChatbotDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const allFieldsFilled =
    chatbotName.trim() !== "" && chatbotDescription.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await createChatbot(formData);
    router.push('/widgets');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-white">
      <div className="w-full max-w-md mx-auto">
        <form action={createChatbot} onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">
            Create a new Chatbot Widget Access
          </h1>
          <div className="bg-white shadow-lg rounded-md p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="chatbot-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chatbot Name
                </label>
                <input
                  type="text"
                  id="chatbot-name"
                  name="name"
                  placeholder="Enter chatbot name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
                  value={chatbotName}
                  onChange={(e) => setChatbotName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="chatbot-description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chatbot Description
                </label>
                <textarea
                  id="chatbot-description"
                  name="description"
                  placeholder="Enter chatbot description"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
                  value={chatbotDescription}
                  onChange={(e) => setChatbotDescription(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full ${
                  allFieldsFilled ? "bg-black hover:bg-gray-900" : "bg-gray-500"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:ring`}
                disabled={!allFieldsFilled || isSubmitting} // Disable the button while submitting
              >
                {isSubmitting ? "Submitting..." : "Create Chatbot Widget Access"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Chat;
