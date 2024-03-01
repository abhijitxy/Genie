"use client";
import Bot from "../Components/bot";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="py-8 ml-auto mr-6">
        <Link href="/integrations">
          <div className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950">
            Enable on site
          </div>
        </Link>
      </div>
      <Bot/>
    </main>
  );
}
