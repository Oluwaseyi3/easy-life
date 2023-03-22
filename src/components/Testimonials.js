import React from 'react'
import { card } from '../assets'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

   <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
          <h1 className={styles.heading2}>
            What People are <br className='sm:block hidden'/> saying about us
          </h1>

          <div>

          </div>
    </div>
    <div className='flex felx-wrap sm: justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) =>(
          <FeedbackCard key={card.id} {...card} />
        ))}
    </div>
    </section>
  )
}

export default Testimonials