import React from 'react'
import Buttons from "./Buttons"
import smile from "../assets/smile.png"
import  {layout} from '../style'
import market from "../assets/market.png"

const Clients = ({cardsRefa, cards2Refb, cards3Refc}) => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo} >
  <img ref={cards3Refc} src={market} alt="billing" className='w-[100%] min-h-[250px] relative z-[5] '/>
  </div>

  
  <div className={layout.sectionImgReverse}>
  <div  alt="billing" className='w-[100%] min-h-[350px] relative z-[5] p-5'>
     <div className='w-[100%] min-h-[250px] flex flex-col gap-5 md:min-h-[300px]'>
     <div>
       <h1 className=' sm:text-[40px] text-[25px] font-semibold '>Easylife Agent Marketing</h1>
     </div>
     <div>
       <p>Easylife Agents get to earn commission from their efforts every month</p>
     </div>
     <div>
    <Buttons title="Get Started"/>
     </div>
     </div>
  </div>
  </div>
  


 
</section>
   
  )
}

export default Clients