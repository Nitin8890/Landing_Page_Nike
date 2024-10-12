import React from "react";
import nike from "../images/brand_logo.png";

const Navbar = () => {
  return (
    <nav className="mt-5 w-full">
      <ul className="flex flex-col md:flex-row justify-between items-center md:justify-around w-full px-5">
        <div className="mb-3 md:mb-0">
          <img src={nike} className="w-20 object-cover" alt="logo" />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col md:flex-row justify-evenly w-full md:w-auto space-y-3 md:space-y-0 md:space-x-5 font-bold text-center">
          <a href="/" className="hover:text-zinc-500 hover:underline">
            MENU
          </a>
          <a href="/" className="hover:text-zinc-500 hover:underline">
            LOCATION
          </a>
          <a href="/" className="hover:text-zinc-500 hover:underline">
            ABOUT
          </a>
          <a href="/" className="hover:text-zinc-500 hover:underline">
            CONTACT
          </a>
        </div>

        {/* Login Button */}
        <div className="mt-3 md:mt-0">
          <button className="bg-red-600 text-white px-4 py-2 font-bold rounded hover:bg-red-800">
            Login
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
