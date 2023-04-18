import React from 'react'
import  nerve  from '../assets/nerve.png'

const Member1 = () => {
  return (
    <div className='flex flex-row items-center justify-evenly p-5 h-[500px] w-[100%] bg-blue-900 text-white'>
      <div className='h-[60vh] w-[30%] hidden md:block '>
      <h1 className='text-[120px] '>Join Us Today</h1>
        </div>
      <div className='h-[100%] w-[50%] items-center'>
      <img src={nerve} className='h-[85%] w-[90%]'/>
      </div>
     
      
    </div>
  )
}

export default Member1