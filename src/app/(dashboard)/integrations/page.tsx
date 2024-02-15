"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

export default function Page() {
  const [showCode, setShowCode] = useState(false);
  const widgetCodeSnippet = `<script src="https://genie-beta.vercel.app/widgets" data-widget-id="${uuidv4()}"></script>`;

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
          <div
            className="mt-4 p-4 bg-gray-50 rounded shadow-inner"
            dangerouslySetInnerHTML={{ __html: widgetCodeSnippet }}
          ></div>
        )}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Your Widget Code Snippet
        </h2>
        {showCode && (
          <pre className="bg-white p-4 rounded mt-4 text-sm text-gray-700 overflow-x-auto">
            <code>{widgetCodeSnippet}</code>
          </pre>
        )}
        <button
          className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ${
            !showCode ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => navigator.clipboard.writeText(widgetCodeSnippet)}
          disabled={!showCode}
        >
          Copy to Clipboard
        </button>
      </div>
    </main>
  );
}
