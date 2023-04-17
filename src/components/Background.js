import React from 'react'
import "../App.css"
import mask from "../assets/mask.png"
import Outline from './Outline'

const Background = () => {
  return (
    <div className='relative text-white h-[70vh] w-[100%] '>
     <img src={mask} alt="" className='h-[70vh] w-[100%]'/>
     <div className='h-[70%] w-[100%] md: w-[85%] bg-blue-600 z-10 absolute left-0 rounded-xl top-10 md:w-[500px] md:left-10 flex flex-col gap-5 p-14' >
        <h1 className='text-[20px]'>Take a Step Now</h1>
        <h1 className='text-[30px]'>Start Saving for a better Tommorow</h1>
        <Outline title="Join For Free"/>
     </div>
    </div>
  )
}

export default Background