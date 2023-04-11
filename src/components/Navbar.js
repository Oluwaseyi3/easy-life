import React, {useState} from 'react'
import {close, logo, menu, easylifelogo} from "../assets"
import {navLinks} from "../constants"

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between item-center navbar'>
      <div className=' flex flex-col h-[10vh] item-center ml-5'>
        <img src={easylifelogo} alt="easylife" className='w-[150px] h-[100px]' />
        {/* <p>empowerment for maximum prosperity</p> */}
        </div>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, i ) => (
              <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${i===navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
              >
                  <a href={`#${nav.id}`}>
                      {nav.title}
                  </a>
              </li>
            ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
                <div className='w-[28px] h-[28px] object-contain'
                 onClick={() =>setToggle((prev) => !prev)}
                > {toggle ? <AiOutlineClose/> : <RxHamburgerMenu/>} </div>
        </div>

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}>
                
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i ) => (
              <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${i===navLinks.length - 1 ? "mr-0" : "mb-4"} text-black`}
              >
                  <a href={`#${nav.id}`}>
                      {nav.title}
                  </a>
              </li>
            ))}
        </ul>
        </div>
    </nav>
  )
}

export default Navbar