import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-screen flex flex-grow h-16 shadow-lg sticky top-0 items-center">
      <h2 className="text-xl font-semibold ml-36">Andrea Rodriguez</h2>
      <div className="text-xs space-x-4 font-semibold absolute right-36 items-center text-gray-800 hidden lg:inline-flex">
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
      <div className="lg:hidden absolute right-5">
        <MenuIcon
          className="w-5 cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-500 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </div>
  );
}

export default Header;
