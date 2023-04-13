import React, {useEffect} from 'react'
import styles from './style'
// import "./App.css"
import {gsap} from "gsap"
import {  Hero, Navbar, Billing, Business, Buttons, Footer, Stats, Testimonials, CardDeal, FeedbackCard, GetStarted, Clients} from "./components"
import {  useRef, useLayoutEffect } from 'react'


const App = () => {

     const boxRef = useRef();
     const redRef = useRef();
     const imgRef = useRef();
     const circleRef = useRef();
     const subTextRef = useRef()
     //Business
     const cardRef = useRef()
     const featureRef = useRef()

     //FeatureCard
     
     const cardsRef1 = useRef()
     const cards2Ref2 = useRef()
     const cards3Ref3 = useRef()
 
     const cardsRefa = useRef()
      const cards2Refb = useRef()
      const cards3Refc = useRef()
   
     useLayoutEffect(() => {
       // Refs allow you to access DOM nodes
       // { current: div.box }
       // then we can animate them like so...
       
       gsap.from(boxRef.current, {opacity: 0, y: 200, duration: 1});
       gsap.from(redRef.current, {opacity: 0, y: 100, duration: 2});
       gsap.from(imgRef.current, {opacity: 0, x: 100, duration: 2});
       gsap.from(circleRef.current, {opacity: 0, x: 100, duration: 2});
       gsap.from(subTextRef.current, {opacity: 0, x: 100, duration: 2});

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

       const el1 = cardsRef1.current;
       const el2 = cards2Ref2.current;
       const el3 = cards3Ref3.current;
       gsap.from(
          el1,
          
          {
            opacity: 0, y: 100, duration: 1,
         
            scrollTrigger: {
              trigger: el1,
            },
          }
        );
    
        gsap.from(
          el2,
          
          {
            opacity: 0, x: 100, duration: 1.5,
         
            scrollTrigger: {
              trigger:   el2,
            },
          }
        );
    
        gsap.from(
          el3,
          
          {
            opacity: 0, x: 100, duration: 2,
         
            scrollTrigger: {
              trigger: el3,
            },
          }
        );

        const ela = cardsRefa.current;
        const el2b = cards2Refb.current;
        const el3c = cards3Refc.current;
    
        gsap.from(
          ela,
          
          {
            opacity: 0, y: 101, duration: 1,
         
            scrollTrigger: {
              trigger: ela,
            },
          }
        );
    
        gsap.from(
          el2b,
          
          {
            opacity: 0, y: 100, duration: 1.5,
         
            scrollTrigger: {
              trigger:   el2b,
            },
          }
        );
    
        gsap.from(
          el3c,
          
          {
            opacity: 0, y: -100, duration: 2,
         
            scrollTrigger: {
              trigger: el3c,
            },
          }
        );
     });
   

      

  return (
    <div  className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
             <Navbar/>
        </div>
    </div>
  
   
 
    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={` ${styles.boxWidth}`}>
         <Hero boxRef={boxRef} redRef={redRef} imgRef={imgRef} circleRef={subTextRef}/>
    </div>
    </div>


    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
    <div className={` ${styles.boxWidth}`}>
      
        <Business cardRef={cardRef} featureRef={featureRef} />
        <Testimonials cardsRef1={cardsRef1} cards2Ref2={cards2Ref2} cards3Ref3={cards3Ref3}/>
        <Stats cardsRefa={cardsRefa} cards2Refb={cards2Refb} cards3Refc={cards3Refc}/>
        <Clients/>
        <CardDeal/>
        <Footer/>
       

    </div>
    </div>
      </div>
  )
}

export default App