import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header
        key="1"
        className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-slate-950"
      >
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
        <div className="text-3xl text-white text-left-top">GENIE</div>
        <div className="ml-auto flex gap-2">
          <div>
            <Link
              className="group inline-flex items-center text-white rounded-md px-4 py-2 text-sm hover:text-black hover:bg-white"
              href="/integrations"
            >
              Integrations
            </Link>
          </div>
          <a href="/chatbots">
            <div className="inline-flex z-50 h-10 items-center justify-center text-black rounded-md bg-white px-6 text-sm font-medium shadow transition-colors hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-slate-300">
              Login
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
