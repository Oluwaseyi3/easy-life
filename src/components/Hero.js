import React from 'react'
import styles from '../style'
import { discount, robot, society } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px:0 sm:px-16 px-6`}>
              <div className='flex flex-row items-center py-[6px] px-4 bg-primary rounded-[10px] mb-2'>
                    <div className='flex flex-row justify-between items center w-full'>
                        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black leading-[100px]'>
                          EasyLife <br className='sm:block hidden'/>{""}
                          <span className='text-gradient  '>
                            Cooperative
                          </span>{""}
                          
                        </h1>
                        <div className='ss:flex hidden md:mr-4 mr-0'>
                            <GetStarted/>
                        </div>
                    </div>
              </div>
              <h1 className='font-poppins ml-3 font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
              Society
</h1>

              <h1 className= "max-w-[470px] mt-5 text-black font-poppins font-semibold">
               A new way to Save, Invest, Loan & Grow your Business
              </h1>
        </div>
        <div>
          <img src={society} alt="image"  className='w-[100%] h-[100%] relative z-[5]'/>
        </div>
    </section>
  )
}

export default Hero