import Link from "next/link";

export default function Component() {
    return (
      <main className="flex flex-col items-center justify-between py-8 bg-gray-50">
        <button className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950">
        <Link href="/chatbots/create">  
           New chatbot
           </Link>
        </button>   
      </main>
    );
  }
  

