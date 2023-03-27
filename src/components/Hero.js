import React from 'react'
import styles from '../style'
import { useEffect, useRef, useLayoutEffect } from 'react'
import {gsap, Elastic, Expo} from "gsap"
import { discount, robot, society } from '../assets'
import GetStarted from './GetStarted'


function fadeIn(target, vars) {
  return gsap.from(target, { opacity: 0, ...vars });
}

const Hero = () => {
  const boxRef = useRef();
  const redRef = useRef();
  const imgRef = useRef();
  const circleRef = useRef();
  const subTextRef = useRef()


  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(boxRef) // { current: div.box }
    // then we can animate them like so...
    
    gsap.from(boxRef.current, {opacity: 0, y: 200, duration: 1});
    gsap.from(redRef.current, {opacity: 0, y: 100, duration: 2});
    gsap.from(imgRef.current, {opacity: 0, x: 100, duration: 2});
    gsap.from(circleRef.current, {opacity: 0, x: 100, duration: 2});
    gsap.from(subTextRef.current, {opacity: 0, x: 100, duration: 2});
  });

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px:0 sm:px-16 px-6`}>
              <div className='flex flex-row items-center py-[6px] px-4 bg-primary rounded-[10px] mb-2'>
                    <div  className=' box flex flex-row justify-between items center w-full' >
                        <h1 ref={boxRef} className='  flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black leading-[90px]'>
                        The New-Age <br className='sm:block hidden'/>{""}
                          <span className='text-gradient  ' >
                            Cooperative
                          </span>{""}
                          
                        </h1>
                        <div className='ss:flex hidden md:mr-4 mr-0'>
                            <GetStarted circle={circleRef}/>
                        </div>
                    </div>
              </div>
              <h1 ref={redRef} className='font-poppins ml-3 font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
              Society
</h1>

              <p className= "max-w-[470px] mt-5 text-black font-poppins " ref={subTextRef}>
               A new way to Save, Invest, Loan & Grow your Business
              </p>
        </div>
        <div ref={imgRef}>
          <img src={society} alt="image"  className='w-[100%] h-[100%] relative z-[5]'/>
        </div>
    </section>
  )
}

export default Hero