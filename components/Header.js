import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-screen flex flex-grow h-16 shadow-lg  items-center bg-white">
      <h2 className="text-xl font-semibold ml-5 lg:ml-36">Andrea Rodriguez</h2>
      <div className="text-xs space-x-4 font-semibold absolute right-36 items-center text-gray-800 hidden lg:inline-flex">
        <p
          className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out"
          onClick={() => router.push("/")}
        >
          HOME
        </p>
        <p
          className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out"
          onClick={() => router.push("/about")}
        >
          ABOUT
        </p>
        <p
          className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out"
          onClick={() => router.push("/portfolio")}
        >
          PORTFOLIO
        </p>
        <p
          className="cursor-pointer hover:text-blue-300 transition transform duration-300 ease-in-out"
          onClick={() => router.push("/contact")}
        >
          CONTACT
        </p>
        <div>
          <p className="cursor-pointer hover:text-white hover:bg-blue-500 text-blue-300 transition transform duration-300 ease-in-out border border-blue-500 rounded-full py-1 px-2">
            RESUME
          </p>
        </div>
      </div>
      <div className="lg:hidden absolute right-5">
        {!showSidebar ? (
          <MenuIcon
            className="w-5 cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        ) : null}
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`top-0 right-0 w-[30vw] bg-black opacity-90 pl-5 pt-6 text-white fixed h-full z-40  ease-in-out duration-500 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="text-sm space-y-5">
          <p
            className="cursor-pointer hover:text-gray-500 transition transform duration-300 ease-in-out"
            onClick={() => router.push("/")}
          >
            HOME
          </p>
          <p
            className="cursor-pointer hover:text-gray-500 transition transform duration-300 ease-in-out"
            onClick={() => router.push("/about")}
          >
            ABOUT
          </p>
          <p
            className="cursor-pointer hover:text-gray-500 transition transform duration-300 ease-in-out"
            onClick={() => router.push("/portfolio")}
          >
            PORTFOLIO
          </p>
          <p
            className="cursor-pointer hover:text-gray-500 transition transform duration-300 ease-in-out"
            onClick={() => router.push("/contact")}
          >
            CONTACT
          </p>
          <p className="cursor-pointer hover:text-gray-500 transition transform duration-300 ease-in-out">
            RESUME
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
