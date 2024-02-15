"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

export default function Page() {
  const [showCode, setShowCode] = useState(false);
  const widgetCodeSnippet = `<script src="https://yourdomain.com/widget.js" data-widget-id="${uuidv4()}"></script>`;
  console.log("Your unique widget code snippet:", widgetCodeSnippet);

  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Integration</h1>
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? "Hide Code" : "Show Code"}
        </button>
        {/* Render the widget code snippet if the button is clicked */}
        {showCode && (
          <div dangerouslySetInnerHTML={{ __html: widgetCodeSnippet }}></div>
        )}
      </div>
    </main>
  );
}
