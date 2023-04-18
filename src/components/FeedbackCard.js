import React, {useRef, useLayoutEffect} from 'react'
import {gsap, Elastic, Expo} from "gsap"



const FeedbackCard = ({content, name, title , icon, cardsRef1, cards2Ref2, cards3Ref3, color}) => {

 
  return (
    <div className={`flex text-white ${color}  justify-between flex-col rounded border-1   px-5 py-5 rounded-[20px] max-w-[330px]  md: mr-5 sm:mr-5
    mr-0 my-5 
    `}>
       <img  src={icon} alt={name} className="w-[48px] h-[48px] rounded-full"/> 
      <p className='font-poppins max-h-105vh] text-start font-semibold  font-normal text-[18px] leading-[32px] text-white my-5 ' ref={cardsRef1}>
        {title}
      </p>
     
      <div className='flex flex-row mt-5' ref={cards3Ref3}>
          
         
              
          <div className='flex flex-col  justify-start max-h-[30vh]'>
             
              <p className='font-poppins text-[15px] leading-[32px] text-black'>{content}</p>
           
          </div>
      </div>
    </div>
  )
}

export default FeedbackCard