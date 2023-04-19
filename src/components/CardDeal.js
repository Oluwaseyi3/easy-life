import React, {useState} from 'react';
import { accordions } from '../constants';
import AccordionItem from './AccordionItem';
import  {layout} from '../style'
import Buttons from './Buttons';
import Outline from './Outline';

const CardDeal = () => {
  const [open, setOpen] =useState(false)

  const toggle = (index) => {
    if (open===index) {
        return setOpen(null)
    }
    setOpen(index)
}

  return (
    

    
    <section id="product" className={layout.sectionReverse }>
      
  <div className={layout.sectionImgReverse}>
  <div  alt="billing" className='w-[100%] min-h-[450px] relative z-[5] p-5 '>
     <div className='w-[100%] h-[200px] flex flex-col justify-between sm:h-[250px]'>
     <div>
       <h1 className=' sm:text-[40px] text-[25px] font-semibold '>Any questions?
We got you.</h1>
     </div>
     <div>
       <p className='text-[20px]'>Learn more about our company culture, products, services and membership benefits</p>
     </div>
     <div>
    <Outline title="Learn More About Us"/>
     </div>
     </div>
  </div>
  </div>
    <div className={layout.sectionInfo} >
      <div className='w-[100%] min-h-[350px] flex flex-col gap-5 justify-between  sm:min-h-[200px]'>

    {
           accordions.map((accordion, index)=> {
             return <AccordionItem
                key={index}
                open={index === open}
                title={accordion.title}
                content={accordion.content}
                toggle={() => toggle(index)}
             />
          })
       }
  </div>
  </div>
  
</section>
   
  )
}

export default CardDeal