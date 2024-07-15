"use client";
import React, { useState } from "react";

export default function Page() {
  const [showCode, setShowCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const widgetCodeSnippet = `<iframe src="https://genie-beta.vercel.app/chatbot" height="500" width="300" frameborder="0" name="bot-iframe"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(widgetCodeSnippet)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); 
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col items-center justify-between space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Integration</h1>
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
        {showCode && (
          <div className="mt-4 p-4 bg-gray-50 rounded shadow-inner">
            <pre className="bg-white p-4 rounded mt-4 text-sm text-gray-700 overflow-x-auto">
              <code>{widgetCodeSnippet}</code>
            </pre>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              onClick={handleCopy}
              disabled={!showCode}
            >
              Copy to Clipboard
            </button>
            {isCopied && <p className="text-black mt-2">Copied to clipboard!</p>}
          </div>
        )}
      </div>
    </main>
  );
}