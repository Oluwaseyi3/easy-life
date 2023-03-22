import React from 'react'
import styles from './style'

import {  Hero, Navbar, Billing, Business, Buttons, Footer, Stats, Testimonials, CardDeal, FeedbackCard, GetStarted, Clients} from "./components"


const App = () => {
  return (
    <div  className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
             <Navbar/>
        </div>
    </div>
  
   
 
    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={` ${styles.boxWidth}`}>
         <Hero/>
    </div>
    </div>


    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
    <div className={` ${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <Testimonials/>
        <Clients/>
        <Footer/>
        {/*
        <CardDeal/>
    
        <Clients/>
         */}

    </div>
    </div>
      </div>
  )
}

export default App