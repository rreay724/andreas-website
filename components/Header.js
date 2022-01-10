import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="w-screen flex h-16 shadow-lg sticky top-0 items-center">
      <h2 className="text-xl font-semibold ml-36">Andrea Rodriguez</h2>
      <div className="text-xs flex space-x-4 font-semibold absolute right-36 items-center text-gray-800">
        <p className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out">
          HOME
        </p>
        <p className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out">
          ABOUT
        </p>
        <p className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out">
          PORTFOLIO
        </p>
        <p className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out">
          CONTACT
        </p>
        <div>
          <p className="cursor-pointer hover:text-white hover:bg-blue-500 text-blue-300 transition transform duration-300 ease-in-out border border-blue-500 rounded-full py-1 px-2">
            RESUME
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
