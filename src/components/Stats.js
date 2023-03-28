import React , {useLayoutEffect, useRef}from 'react'
import {agent, woman} from "../assets"
import styles, {layout} from '../style'
import {gsap, Elastic, Expo} from "gsap"


const Stats = ({cardsRefa, cards2Refb, cards3Refc}) => {

  return (
  
        <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
        <div  alt="billing" className='w-[100%] min-h-[450px] relative z-[5] p-10'>
          <div className='w-[100%] min-h-[150px]  flex flex-col'>
          <p  ref={cardsRefa}className="font-poppins font-bold font-normal text-[30px] leading-[42px] text-white my-5">What customers are saying</p>
          <p   ref={cards2Refb}className="font-poppins font-bold font-normal text-[18px] leading-[32px] text-white my-5">I have been saving with easylifecoop for over 10 years now and I can say that they have never failed. Recent innovations have been mind blowing and have made my business effective… I am so grateful.</p>
          <p  ref={cards3Refc} className="font-poppins font-bold font-normal text-[16px] leading-[32px] text-black my-5">-Mrs Ariyo Ayobanji</p>
          </div>
          
        </div>
        </div>
        <div className={layout.sectionInfo} >
        <img ref={cards3Refc} src={woman} alt="billing" className='w-[100%] min-h-[450px] relative z-[5] '/>
        </div>


       
    </section>
  )
}

export default Stats