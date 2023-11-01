
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="text-center text-white">
        <p className="text-4xl font-bold pb-8">Botai</p>
        <p className="text-2xl font-bold pb-8">
          A bot that helps you manage your tasks
        </p>
        <a href="/dashboard" className="mt-4">
          //test 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </a>
      </div>
    </main>
  );
}


