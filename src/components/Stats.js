import React from 'react'
import { woman} from "../assets"
import  {layout} from '../style'
import smile from "../assets/smile.png"

import Buttons from "./Buttons"

const Stats = ({cardsRefa, cards2Refb, cards3Refc}) => {

  return (
  
        <section id="product" className={`${layout.section} p-4 bg-blue-200`}>
        <div className={layout.sectionImgReverse}>
        <div  alt="billing" className='w-[100%] min-h-[400px] relative z-[5] p-5 '>
           <div className='w-[100%] min-h-[350px] flex flex-col justify-between sm:min-h-[300px]'>
           <div>
             <h1 className=' sm:text-[40px] text-[25px] font-semibold '>Get the best returns on your investments</h1>
           </div>
           <div>
             <p>Members or Customers can invest with the Cooperative Society or highlighted businesses and get a very juicy return on investment yearly</p>
           </div>
           <div>
          <Buttons title="Get Started"/>
           </div>
           </div>
        </div>
        </div>
        <div className={layout.sectionInfo} >
        <img ref={cards3Refc} src={smile} alt="billing" className='w-[100%] min-h-[450px] relative z-[5] '/>
        </div>


       
    </section>
  )
}

export default Stats