"use client";

import { useUser } from "@clerk/nextjs"; // Import useUser from Clerk
import Link from "next/link";
import Bot from "../Components/bot";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser(); // Retrieve the user using Clerk

  // Wait for user to be loaded before rendering
  if (!isLoaded) return null;
  if (!isSignedIn) return <div>Please sign in</div>;

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="py-8 ml-auto mr-6">
        <Link href={`/integration/${user.id}`}>
          <div className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950">
            Enable on site
          </div>
        </Link>
      </div>
      <Bot />
    </main>
  );
}
