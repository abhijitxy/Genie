import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="text-left text-white absolute top-0 left-0 p-8">
        <p className="text-4xl font-bold">Botai</p>
      </div>
      <div className="text-center text-white">
        <p className="text-2xl font-bold pb-8">
          A bot that helps you manage your tasks
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/api/auth/callback/github"
            className="rounded-md bg-blue-500 px-3.5 py-2.5 cursor-pointer text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
        </div>
      </div>
    </main>
  );
}

