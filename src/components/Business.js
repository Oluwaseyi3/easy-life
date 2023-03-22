import React from 'react'
import {features} from "../constants"
import styles, {layout} from '../style'
import Buttons from './Buttons'


const FeatureCard = ({icon, title, content, index}) => {
  return(
   <div>
    <div className={`flex flex-row p-6 rounded-[20px] ${index!== features.length - 1 ? "mb-6" : "mb-0"} featured-card`}>
       <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
       <img src={icon} alt="" className='w-[50%] h-[50%] object-contain'  />
 </div>
      <div className='flex-1 flex flex-col ml-10'>
          <h4 className='font-poppins font-semibold text-black text-[14px] leading-[23px] mb-1'>
              {title}
          </h4>
          <p>
            {content}
          </p>
      </div>
    </div>
   </div>
)}

const Business = () => {
  return ( 
    <section id='features' className={layout.section}>
          <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
Who we are…
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Easylife ventures cooperative society are a team of enthusiastic Entrepreneurs and Business people who understand the value of partnership and networking.

At Easylife Cooperative Society, we have a mandate to help entrepreneurs build a strong culture of saving while providing access to funds that will promote personal and collective socio-economic growth and development. 
(Learn more - links to about us page)

              </p>


              
              <Buttons styles="mt-10 mb-7"/>

              <h2 className={styles.heading2}>
	
              Our Mission….


              </h2>

              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           
We will empower our members to take bold steps to engage their future so as to build and deliver extraordinary Socio-economic Values that will provide prosperity and fight poverty and ultimately transform the Socio-economic and Socio-political consciousness in our country Nigeria.


              </p>

              


          </div>

          <div className={`${layout.sectionImg} flex-col`}>
              {
                features.map((feature, index) => (
                  <FeatureCard key={feature.id} {...feature} index={index} />
                ))
              }
          </div>
          <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient"/>
    </section>
  )
}

export default Business