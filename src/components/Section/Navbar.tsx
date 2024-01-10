'Use Client';

import Link from "next/link";
const Navbar = () => {
  return (
    
<header
      key="1"
      className="flex h-20 w-full shrink-0 items-center px-4 md:px-6"
    >
      <div className="ml-auto flex gap-2">
        <div>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="#"
          >
            Pricing
          </Link>
        </div>
        <div>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="#"
          >
            Integrations
          </Link>
        </div>
        <div className="px-8 py-3 m-2 text-white bg-black border border-black rounded-xl hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-700 transition-all duration-300">
          <a>Login</a>
        </div>
      </div>
    </header> 

  );
};

export default Navbar;
