"Use Client";

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
            className="group inline-flex items-center rounded-md px-4 py-2 text-sm hover:bg-slate-300"
            href="/integrations"
          >
            Integrations
          </Link>
        </div>
        <div className="inline-flex h-10 items-center justify-center text-white rounded-md bg-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
          <a href="/chatbots">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
