import React from 'react'

import tool from "../assets/tool.png"
import styles from "../style"
import keys from "../assets/keys.png"
import Buttons from '../components/Buttons'
const Service2 = () => {
  return (
  
    
    <div className={`flex flex-col md:flex-row  py-10 gap-10 w-[100%]  mt-10`}>
       <div className={`flex flex-col gap-3 w-[100%]  text-black p-10  ${styles.paddingX }`}>
       <img src={keys} alt="" className='max-h-[500px] w-[100%]'  />
       </div>
       <div className={`flex flex-col gap-6 w-[100%] justify-center ${styles.paddingX}`}>
         <h1 className='text-[40px] font-bold'> Entry Requirements</h1>
         <p className='text-[20px]'>For Group Financing, members must be able to show proof of earnings and source of income.</p>
         <p className='text-[20px]'>Applicants must fill the form physically through Easylife Agents or through the website and pay the entry fee.</p> 
        <div className='w-[250px]'>
        <Buttons title="Register with us"/>
        </div>
      
       </div>
    </div>
  )
}

export default Service2