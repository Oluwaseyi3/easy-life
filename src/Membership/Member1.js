import React from 'react'
import  nerve  from '../assets/nerve.png'
import smile from "../assets/smile.jpg"
const Member1 = () => {
  return (
    <div className='flex flex-row items-center justify-evenly p-5 h-[500px] w-[100%] bg-blue-900 text-white'>
      <div className='h-[60vh] w-[30rem] hidden lg:block '>
      <h1 className='text-[120px] '>Join Us Today</h1>
        </div>
      <div className='h-[100%] w-[30rem] items-center'>
      <img src={smile} className='h-[85%] w-[30rem] rounded-xl'/>
      </div>
     
      
    </div>
  )
}

export default Member1