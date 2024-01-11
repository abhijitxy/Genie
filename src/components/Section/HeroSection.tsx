'Use Client';
import React from "react";
// import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            Generative AI-powered customer support
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            In less than four minutes, automate customer service on your website
            with a bespoke ChatGPT-like bot. Your customer service bot needs no
            maintenance or training, and it will handle requests and escalate
            them to an agent if necessary.
          </p>
          <a
            href="/chatbots"
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Get started
          </a>
        </div>
        {/* Image section removed */}
      </div>
    </section>
  );
};

export default HeroSection;
