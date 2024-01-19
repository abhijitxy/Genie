"use client";
import Link from "next/link";

const chatbot = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create a new Chatbot Widget Access
        </h1>
        <div className="bg-white shadow-md rounded-md p-6">
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
                placeholder="Enter chatbot name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
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
                placeholder="Enter chatbot description"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              ></textarea>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="chatbot-avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Chatbot Avatar
              </label>
              <input
                type="file"
                id="chatbot-avatar"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="chatbot-color"
                className="block text-sm font-medium text-gray-700"
              >
                Chatbot Color Scheme
              </label>
              <input
                type="color"
                id="chatbot-color"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="chatbot-language"
                className="block text-sm font-medium text-gray-700"
              >
                Chatbot Language
              </label>
              <select
                id="chatbot-language"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              >
                <option value="" disabled selected>
                  Select language
                </option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="chatbot-greeting"
                className="block text-sm font-medium text-gray-700"
              >
                Chatbot Greeting Message
              </label>
              <input
                type="text"
                id="chatbot-greeting"
                placeholder="Enter greeting message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="chatbot-farewell"
                className="block text-sm font-medium text-gray-700"
              >
                Chatbot Farewell Message
              </label>
              <input
                type="text"
                id="chatbot-farewell"
                placeholder="Enter farewell message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>
            <Link href="">
              <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring">
                Create Chatbot Widget Access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default chatbot;
