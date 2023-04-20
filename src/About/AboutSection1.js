import React from 'react'
import  {layout} from '../style'
import smile from "../assets/smile.png"
import styles from "../style"
import ajide from "../assets/ajide.jpeg"

const AboutSection1 = () => {
  return (
<section id="product" className={`${layout.sectionReverse } ${styles.paddingX}  text-black pb-5 ${styles.paddingY}`}>
          <div className={`${layout.sectionInfo} mt-10`} >
           <div className='flex flex-col gap-3 justify-between'>
            <div>  <h2 className='text-[35px] font-bold'>10+ years of Super efficient Services…</h2></div>
           <div className='mt-5'>
             <p>
             Easylife ventures cooperative society are a team of enthusiastic Entrepreneurs and Business people who understand the value of partnership and networking.
At Easylife Cooperative Society, we have a mandate to help entrepreneurs build a strong culture of saving while providing access to funds that will promote personal and collective socio-economic growth and development. 
</p>

<div className='mt-5'>
    <p>
For as long as money has existed, people have had thoughts and opinions about it. And while not everyone will agree about the best ways to earn, save and spend money, many wise people agree on the efficacy of saving
</p>
</div>
             </div>
           </div>
         </div>
         <div className={`${layout.sectionImgReverse} w-[100%]   pb-5 mb-3 relative`}>
            <img src={ajide} className="w-[50%] z-10 rounded-xl h-full relative"alt=""/>
            {/* <div className='w-[50%] h-full bg-white absolute rounded-xl top-10 right-20 pb-5'/> */}
         </div>

         
    </section>
  )
}

export default AboutSection1