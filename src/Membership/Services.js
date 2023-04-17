import React from 'react'
import { GrServices } from 'react-icons/gr'
import { GiEntryDoor } from 'react-icons/gi'
const Services = () => {
  return (
    <div className=' flex flex-col md:flex-row  py-10 gap-10 w-[100%]'>
       <div className='flex flex-col gap-3 w-[100%]'>
           <h1 className='text-[30px]'><GrServices/>Service and Conditions</h1>
           <p>	Only members can be primary beneficiaries of any of our services.</p>
           <p>	To access any loan, members must have been registered with the Cooperative and making regular savings for at least three to Six months.</p>
           <p>	Savings could also be flexible depending on members </p>
           <p>	Members who require Loans can take loans valued 200% more of their total savings.</p>
           <p>Repayment terms to suit your circumstances or business cycle</p>
           <p>To terminate an account for any reason, members must give the management a one month notice.</p>
       </div>
       <div className='flex flex-col gap-3 w-[100%]'>
         <h1 className='text-[30px]'><GiEntryDoor/>Entry Requirements</h1>
         <p>For Group Financing, members must be able to show proof of earnings and source of income.</p>
         <p>Applicants must fill the form physically through Easylife Agents or through the website and pay the entry fee.</p>
       </div>
    </div>
  )
}

export default Services