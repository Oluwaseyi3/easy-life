import React from 'react'
import {apple, bill, google, agent} from "../assets"
import styles , {layout} from "../style"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>

      
         <img src={agent} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
     <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
     </div>

     <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Easylife Agent <br className='sm:block hidden'/> Network Marketing 
        </h2>




        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Easylife Agents get to earn commission from their clients and up to 60% commission  from the down lines every month for the rest of their lives.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img  src={apple} alt="" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
            <img  src={google} alt="" className='w-[128px] h-[42px] object-contain  cursor-pointer'/>
          </div>
     </div>
    </section>
  )
}

export default Billing