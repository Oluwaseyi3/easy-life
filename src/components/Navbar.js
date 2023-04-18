import React, { useState } from "react";
import { Link } from "react-router-dom";
// import  easylife from "../.";
import Buttons from "./Buttons";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-900 text-white">
      <div className="flex items-center font-medium justify-around p-4">
        <div className="z-50 p-0 md:w-auto w-full flex justify-between">
           <h2 className="text-[25px] mr-10">easylife</h2>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              products
            </a>
          </li>
          <li>
            <a href="/about" className="py-7 px-3 inline-block">
              About Us
            </a>
          </li>

          <li>
            <a href="/membership" className="py-7 px-3 inline-block">
             Members
            </a>
          </li>
       
        </ul>
        <div className="md:block hidden">
          <Buttons title="Register with us" />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-black z-10 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>

          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="py-7 px-3 inline-block">
              About Us
            </a>
          </li>
          <li>
            <a href="/membership" className="py-7 px-3 inline-block">
              Member
            </a>
          </li>
        
          <div className="py-5">
            <Buttons title="Register with us"/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;