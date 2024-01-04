"Use Client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col justify-center space-y-2 md:w-1/2">
            <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none p-7">
              Empower Your Creativity with Us
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 p-7">
              Unlock your full creative potential with our innovative platform.
              Whether you are a beginner or a professional, we have the tools to
              help you succeed.
            </p>
          </div>
          <div className=" mx-16 md:w-1/2">
          <Link href="/chatbots">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Try for Free
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
