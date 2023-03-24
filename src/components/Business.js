import React, {useRef, useEffect}from 'react'
import {features} from "../constants"
import styles, {layout} from '../style'
import Buttons from './Buttons'
import {gsap, Elastic, Expo} from "gsap"

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

const Business = () => {
  const cardRef = useRef()
  const featureRef = useRef()
  useEffect(() => {
    const el = cardRef.current;
    const elFeature = featureRef.current;
    gsap.from(
      el,
      
      {
        opacity: 0, y: 100, duration: 1,
     
        scrollTrigger: {
          trigger: el,
        },
      }
    );

    gsap.from(
      elFeature,
      
      {
        opacity: 0, x: 100, duration: 1.5,
     
        scrollTrigger: {
          trigger: elFeature,
        },
      }
    );
  }, []);

  // useLayoutEffect(() => {
  //   // Refs allow you to access DOM nodes
  //   console.log(cardRef) // { current: div.box }
  //   // then we can animate them like so...
    

 
  //   gsap.from(cardRef.current, {
  //     scrollTrigger: cardRef, // start the animation when ".box" enters the viewport (once)
  //     opacity: 0, y: 500, duration: 2
  //   });
  // });
  return ( 
    <section id='features' className={layout.section}>
          <div className={layout.sectionInfo} ref={cardRef}>
              <h2 className={styles.heading2}>
Who we are…
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Easylife ventures cooperative society are a team of enthusiastic Entrepreneurs and Business people who understand the value of partnership and networking.

At Easylife Cooperative Society, we have a mandate to help entrepreneurs build a strong culture of saving while providing access to funds that will promote personal and collective socio-economic growth and development. 
(Learn more - links to about us page)

              </p>


              
              <Buttons styles="mt-10 mb-7"/>

             
              


          </div>

          <div className={`${layout.sectionImg} flex-col`} ref={featureRef}>
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