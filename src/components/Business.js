import React, {useRef, useEffect} from 'react'
import {features} from "../constants"
import styles, {layout} from '../style'
import Buttons from './Buttons'
import {gsap, Elastic, Expo} from "gsap"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, {  scale: 1.2 });
};

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, {  scale: 1 });
};

const FeatureCard = ({icon, title, content, index}) => {




  return(
   <div>
    <div className={`flex flex-row p-6 rounded-[20px] ${index!== features.length - 1 ? "mb-6" : "mb-0"} featured-card`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
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

const Business = ({cardRef, featureRef}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return ( 
    <section id='features' className={`${layout.section} p-5` }>
          <div  ref={cardRef} className={`${layout.sectionInfo} text-center md:text-left p-5`}>
        
              <>
             <h2 className={`${styles.heading2} `}>
              Our Vision
                </h2>
                <p className={`${styles.paragraph}  mt-5 text-center md:text-left`}>
             
To be the most effective and productive online and offline Cooperative Society in Abuja and Nigeria at large, producing a conducive platform for personal and collective growth for our Members.
  
                </p>
          
              </>
  
          
              
          </div>  
    
            
          <div ref={cardRef} className={`${layout.sectionInfo}  text-center md:text-left p-5`} >
          <h2 className={styles.heading2}>
          Our  mission
          </h2>
          <p className={`${styles.paragraph}  text-center mt-5`}>
          We will empower our members to take bold steps to engage their future so as to build and deliver extraordinary Socio-economic Values that will provide prosperity and fight poverty and ultimately transform the Socio-economic and Socio-political consciousness in our country Nigeria.

          </p>

      </div>
    

    </section>
  )
}

export default Business