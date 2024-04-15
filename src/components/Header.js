import React from "react";
import { cart, ham, logo } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-12 mx-8" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-black font-bold hover:text-orange-900
              hover:underline underline-offset-2 decoration-[1px]"
              cursor-pointer
              duration-300
            >
              Home
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
              hover:underline underline-offset-2 decoration-[1px]"
              cursor-pointer
              duration-300
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
              hover:underline underline-offset-2 decoration-[1px]"
              cursor-pointer
              duration-300
            >
              Shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
              hover:underline underline-offset-2 decoration-[1px]"
              cursor-pointer
              duration-300
            >
              Element
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
              hover:underline underline-offset-2 decoration-[1px]"
              cursor-pointer
              duration-300
            >
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-9 mx-5" src={cart} alt="cartImg" />
            <span
              className="absolute w-0 top-2 left-0 text-sm flex items-center 
            justify-center font-semibold"
            >
              0
            </span>
          </div>
          <img className="w-9 h-9 rounded-full" src={ham} alt="userLogo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
