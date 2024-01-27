"Use Client";
import React from "react";
import { BsHouseDoor, BsRobot, BsDatabase } from "react-icons/bs";
import { LuMousePointerClick, LuComponent, LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="lg:w-64 w-full h-screen bg-gray-100 border-r overflow-y-auto shadow-md">
      <div className="flex flex-col p-6">
        <Link href="">
          <div className="flex items-center gap-2 font-semibold text-xl text-gray-800 hover:text-blue-500 dark:hover:text-blue-300">
            <BsHouseDoor className="h-6 w-6" />
            <span>Dashboard</span>
          </div>
        </Link>

        <nav className="mt-8">
          {[
            { href: "/chatbots", icon: <BsRobot />, text: "Chatbots" },
            { href: "/datasource", icon: <BsDatabase />, text: "Data Sources" },
            {
              href: "/widgets",
              icon: <LuMousePointerClick />,
              text: "Widgets",
            },
            {
              href: "/integrations ",
              icon: <LuComponent />,
              text: "Integrations",
            },
          ].map((link) => (
            <Link href={link.href} key={link.text}>
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-300 ">
                {link.icon &&
                  React.cloneElement(link.icon, { className: "h-5 w-5" })}
                <span className="text-sm">{link.text}</span>
              </div>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-300">
          <LuLogOut />
          <Link href={"/"}>
            <SignOutButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
