import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { IconContext } from "react-icons";

const Member2 = () => {
  return (
    <div className='flex flex-col gap-5 sm:py-16 py-6`'>
    <h1 className='text-[36px] text-center'>Membership Benefits</h1>
    

    <div className='flex flex-row gap-3'>
    <IconContext.Provider value={{ color: "purple", className: "global-class-name", size:"30px" }}>  
    <BsFillPatchCheckFill/>
     <h3 className='w-[100%]'>

  	Members get to Interact, Network and brainstorm with other entrepreneurs and like-minded professionals.
     </h3>
     </IconContext.Provider>
    </div>

    <div className='flex flex-row gap-3'>
    <IconContext.Provider value={{ color: "purple", className: "global-class-name", size:"30px" }}>  
    <BsFillPatchCheckFill/>
     <h3 className='w-[100%]'>
       Members get access to Funding for both personal and business needs at a very little interest rate.
     </h3>
     </IconContext.Provider>
    </div>

    <div className='flex flex-row gap-3'>
    <IconContext.Provider value={{ color: "purple", className: "global-class-name", size:"30px" }}>  
    <BsFillPatchCheckFill/>
     <h3 className='w-[100%]'>
    	Members save Regular, encouraging modest living, personal improvement opportunities and a more productive life.
     </h3>
     </IconContext.Provider>
    </div>

   

    <div className='flex flex-row gap-3 '>
    <IconContext.Provider value={{ color: "purple", className: "global-class-name", size:"30px" }}> 
    <BsFillPatchCheckFill/>
     <h3 className='pb-4 w-[100%]'>
  Group financing has also proven to be a huge source for Business funding rather than the hard-to-get bank loans that you have to collateralize your entire livelihood.

     </h3>
     </IconContext.Provider >
    </div>

   
  
</div>
  )
}

export default Member2