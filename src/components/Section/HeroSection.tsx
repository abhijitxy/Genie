import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white flex items-center justify-center min-h-screen p-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl w-full">
        <div className="text-left max-w-xl mb-6 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Communicate With Your Customers
          </h1>
          <p className="text-gray-600 text-lg mb-6">
          In under four minutes, you can set up a custom chatbot similar to ChatGPT on your website for customer service. This bot doesn't require any upkeep or training, and it can manage inquiries, even forwarding them to a live agent when needed.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your mail"
              className="px-4 py-2 w-64 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/hero1.png"
            alt="Hero Image"
            width={500}
            height={400}
            style={{ objectFit: 'contain' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;