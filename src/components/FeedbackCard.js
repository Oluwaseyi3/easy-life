import React, {useRef, useLayoutEffect} from 'react'
import {gsap, Elastic, Expo} from "gsap"



const FeedbackCard = ({content, name, title , icon, cardsRef1, cards2Ref2, cards3Ref3}) => {

 
  return (
    <div className='flex   justify-between flex-col rounded border-1   px-5 py-5 rounded-[20px] max-w-[250px] max-h-[100%] md: mr-10 sm:mr-5
    mr-0 my-5 
    '>
       <img  src={icon} alt={name} className="w-[48px] h-[48px] rounded-full"/> 
      <p className='font-poppins min-h-[5vh] text-start font-semibold  font-normal text-[18px] leading-[32px] text-black my-10 ' ref={cardsRef1}>
        {title}
      </p>
     
      <div className='flex flex-row mt-5' ref={cards3Ref3}>
          
         
              
          <div className='flex flex-col  justify-start min-h-[20vh]'>
             
              <p className='font-poppins text-[15px] leading-[32px] text-black'>{content}</p>
           
          </div>
      </div>
    </div>
  )
}

export default FeedbackCard