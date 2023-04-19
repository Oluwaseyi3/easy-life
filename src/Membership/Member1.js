import React, {useLayoutEffect, useRef} from 'react'
import  nerve  from '../assets/nerve.png'
import {gsap} from "gsap"
import smile from "../assets/smile.jpg"
const Member1 = () => {

  const imgRef = useRef();
const textRef = useRef();

useLayoutEffect(() => {
  gsap.from(imgRef.current, {opacity: 0, y: 200, duration: 1});
  gsap.from(textRef.current, {opacity: 0, y: 100, duration: 2});

}, [])


  return (
    <div className='flex flex-row items-center justify-evenly p-5 h-[500px] w-[100%] bg-blue-900 text-white'>
      <div className='h-[60vh] w-[30rem] hidden lg:block ' ref={textRef}>
      <h1 className='text-[120px] '>Join Us Today</h1>
        </div>
      <div className='h-[100%] w-[30rem] items-center' ref={imgRef}>
      <img src={smile} className='h-[85%] w-[30rem] rounded-xl'/>
      </div>
     
      
    </div>
  )
}

export default Member1