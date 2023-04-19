import React from 'react'
import { GrServices } from 'react-icons/gr'
import { GiEntryDoor } from 'react-icons/gi'
import tool from "../assets/tool.png"
import styles from "../style"
const Services = () => {
  return (
  
    
    <div className={`flex flex-col md:flex-row  py-10 gap-10 w-[100%] bg-blue-600`}>
       <div className={`flex flex-col gap-3 w-[100%]  text-white p-10  ${styles.paddingX }`}>
           <h1 className='text-[40px] font-bold'>Service and Conditions</h1>
           <p className='text-[20px]'>	Only members can be primary beneficiaries of any of our services.</p>
           <p className='text-[20px]'>	To access any loan, members must have been registered with the Cooperative and making regular savings for at least three to Six months.</p>
           <p className='text-[20px]'>	Savings could also be flexible depending on members </p>
           <p className='text-[20px]'>	Members who require Loans can take loans valued 200% more of their total savings.</p>
           <p className='text-[20px]'>Repayment terms to suit your circumstances or business cycle</p>
           <p className='text-[20px]'>To terminate an account for any reason, members must give the management a one month notice.</p>
       </div>
       <div className='flex flex-col gap-3 w-[100%]'>
         {/* <h1 className='text-[30px]'><GiEntryDoor/>Entry Requirements</h1>
         <p>For Group Financing, members must be able to show proof of earnings and source of income.</p>
         <p>Applicants must fill the form physically through Easylife Agents or through the website and pay the entry fee.</p> */}
        <img src={tool} alt="" className='max-h-[500px] w-[100%]'  />
       </div>
    </div>
  )
}

export default Services