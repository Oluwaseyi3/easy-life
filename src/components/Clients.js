import React from 'react'
import Buttons from "./Buttons"
import smile from "../assets/smile.png"
import  {layout} from '../style'

const Clients = ({cardsRefa, cards2Refb, cards3Refc}) => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo} >
  <img ref={cards3Refc} src={smile} alt="billing" className='w-[100%] min-h-[450px] relative z-[5] '/>
  </div>

  
  <div className={layout.sectionImgReverse}>
  <div  alt="billing" className='w-[100%] min-h-[450px] relative z-[5] p-10 '>
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
  


 
</section>
   
  )
}

export default Clients