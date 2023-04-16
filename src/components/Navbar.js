import React, {useState} from 'react'
import {close, menu, easylifelogo} from "../assets"
import {navLinks} from "../constants"

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between items-center w-[92%] mx-auto h-[15vh]'>
       <div>
       <img src={easylifelogo} className="w-[30%] md:w-[15%]"/>
       </div>
       <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
       <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                {/* <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon> */}
            </div>
     
    </nav>
  )
}

export default Navbar