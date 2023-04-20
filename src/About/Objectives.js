import React from 'react'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { IconContext } from "react-icons";

const Objectives = () => {
  return (
    <div className='flex flex-col gap-5 sm:py-16 py-6 px-6 bg-blue-300 text-white'>
        <h1 className='text-[36px] font-black'>Objectives</h1>
        <div className='flex flex-row gap-3'>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}>  
        <BsBookmarkCheckFill/>
         <h3 className='w-[100%] text-[25px]'>
       	To be the most successful online and offline Cooperative in Nigeria.
         </h3>
         </IconContext.Provider>
        </div>

        <div className='flex flex-row gap-3'>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}>  
        <BsBookmarkCheckFill/>
         <h3 className='w-[100%] text-[25px]'>

         To encourage and enhance a Saving Culture among young and older Nigerians, especially Entrepreneurs and SMEs

         </h3>
         </IconContext.Provider>
        </div>

        <div className='flex flex-row gap-3'>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}>  
        <BsBookmarkCheckFill/>
         <h3 className='w-[100%] text-[25px]'>
       	To help the Socio-economic status of all our members by providing access to easy funding and loaning Services.
         </h3>
         </IconContext.Provider>
        </div>

        <div className='flex flex-row gap-3'>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}>  
        <BsBookmarkCheckFill/>
         <h3 className='w-[100%] text-[25px]'>
        	To nurture and groom ethical leaders that will transform our economic status and improve our collective well being.
         </h3>
         </IconContext.Provider>
        </div>

        <div className='flex flex-row gap-3'>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}> 
        <BsBookmarkCheckFill/>
         <h3 className='w-[100%] text-[25px]'>
      	To help members focus on conducting funds and funding amongst themselves enhancing a collective rather than individual growth and overall success.
         </h3>
         </IconContext.Provider>
        </div>
   
        <div className='flex flex-row gap-3 '>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:"30px" }}> 
        <BsBookmarkCheckFill/>
         <h3 className='pb-4 w-[100%] text-[25px]'>
          To support governmental initiatives and provide streamlined opportunities for members growth and development.


         </h3>
         </IconContext.Provider >
        </div>

       
      
    </div>
  )
}

export default Objectives