import React from 'react'
import  {layout} from '../style'
import smile from "../assets/smile.png"
import styles from '../style'
import divide from "../assets/divide.png"

const AboutSection1 = () => {
  return (
<section id="product" className={`${layout.section} bg-black text-white  mt-5`}>
<div className={layout.sectionImg}>
            <img src={divide} className="w-[80%]"alt=""/>
         </div>
          <div className={`${layout.sectionInfo}  ${styles.paddingX} ${styles.paddingY} `} >
           <div className='flex flex-col gap-3 justify-start'>
          
             <p>
             We provide a saving Platform and easier access to funds so our members can meet their personal and socio economic development Goals.

Easylife Ventures Co-operative Society is licensed and regulated by the Federal Capital Territory, Abuja, under the Nigerian Cooperative Societies Act (2004) as amended and has its members in Abuja.
</p>

<p className='mt-5'>
We have a simple Ideology, 

we believe people can achieve more together than individually, so we strive to help Entrepreneurs, Everyday Business people ie SMEs with outstanding entrepreneurial visions achieve their heart desires to make bold and actionable steps towards achieving the same.
</p>

<p className='mt-5'>
Young, Agile and Intellectual Entrepreneurs can put resources together and rise together instead of scrambling for scarce opportunities. In no time, our members get to create for themselves a chain of Value, creating employment and working together towards a collective success.
</p>

          
           </div>
         </div>
         

         
    </section>
  )
}

export default AboutSection1