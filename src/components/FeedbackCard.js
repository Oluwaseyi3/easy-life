import React, {useRef, useEffect} from 'react'
import {gsap, Elastic, Expo} from "gsap"



const FeedbackCard = ({content, name, title , img}) => {

  const cardsRef = useRef()
  const cards2Ref = useRef()
  const cards3Ref = useRef()
 
  useEffect(() => {
    const el = cardsRef.current;
    const el2 = cards2Ref.current;
    const el3 = cards3Ref.current;

    gsap.from(
      el,
      
      {
        opacity: 0, y: 100, duration: 1,
     
        scrollTrigger: {
          trigger: el,
        },
      }
    );

    gsap.from(
      el2,
      
      {
        opacity: 0, x: 100, duration: 1.5,
     
        scrollTrigger: {
          trigger:   el2,
        },
      }
    );

    gsap.from(
      el3,
      
      {
        opacity: 0, x: 100, duration: 2,
     
        scrollTrigger: {
          trigger: el3,
        },
      }
    );
  }, []);
  return (
    <div className='flex  bg-red-50 justify-between flex-col rounded border-1   px-10 py-12 rounded-[20px] max-w-[370px] min-h-[300px] md: mr-10 sm:mr-5
    mr-0 my-5 
    '>
      <p className='font-poppins font-bold font-normal text-[18px] leading-[32px] text-black my-10 ' ref={cardsRef}>
        {content}
      </p>
      <p className='font-poppins  font-normal text-[18px] leading-[32px] text-black' ref={cards2Ref}>{name}</p>
      <div className='flex flex-row mt-5' ref={cards3Ref}>
          {/* <img  src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/> */}
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E0EFFF"></circle><path d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z" fill="#003399"></path></svg>
              
          <div className='flex flex-col ml-4 '>
             
              <p className='font-poppins font-semibold text-[15px] leading-[32px] text-black'>Learn More</p>
           
          </div>
      </div>
    </div>
  )
}

export default FeedbackCard