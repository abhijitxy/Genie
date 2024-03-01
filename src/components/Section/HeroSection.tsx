import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-slate-950 flex items-start justify-center h-screen overflow-auto p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-gray-50 py-2">
          Generative AI-powered
          <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            customer support
          </span>
        </h1>
        <div className="flex justify-center py-2 rounded-md">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={2500} 
            height={1500} 
            objectFit="cover" 
          />
        </div>
        <p className="mt-4 mb-6 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
          In less than four minutes, automate customer service on your website
          with a bespoke ChatGPT-like bot. Your customer service bot needs no
          maintenance or training, and it will handle requests and escalate them
          to an agent if necessary.
        </p>
        <a
          href="/chatbots"
          className="inline-flex h-10 items-center justify-center text-black rounded-md bg-white px-8 text-sm font-medium shadow transition-colors hover:text-black hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        >
          Get started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
