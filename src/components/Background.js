import React from 'react'
import "../App.css"
import mask from "../assets/mask.png"
import styles from "../style"
import Outline from './Outline'

const Background = () => { 
  return (
    <div className={`relative text-white max-h-[400px]  w-[100%] ${styles.paddingX}`}>
     {/* <img src={mask} alt="" className='max-h-[1500px] w-[100%] h-[70%] '/> */}
     <div className='w-[100%] max-h-[400px] md: w-[100%] bg-blue-600 z-10  rounded-xl top-10 md:w-[100%] md:left-10 flex flex-col gap-5 p-14' >
        <h1 className='text-[20px]'>Take a Step Now</h1>
        <h1 className='text-[30px]'>Start Saving for a better Tommorow</h1>
        <div className='w-[400px]'>
        <Outline title="Join For Free"/>
        </div>
        
     </div>
    </div>
  )
}

export default Background