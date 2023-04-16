import React from 'react'
import { joy } from '../assets'

const Member1 = () => {
  return (
    <div className='flex flex-col gap-10 py-10'>
       <h1 className='text-[36px]'>Why become a member?</h1>

       <p className='text-[20px]'>
       Easylife Cooperative is here to inject savings habits into its members so that their future would be planned and secured without having to empty their bank accounts to cater for urgent needs. 
       </p>
       <img src={joy} className='w-[50%]' />
    </div>
  )
}

export default Member1