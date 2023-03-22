import React from 'react'
import Buttons from "./Buttons"
import styles from '../style'


const Clients = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-col flex-row bg-white rounded-[20px] box-shadow rounded border-2 border-blue`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={styles.heading2}>
                Let's try out our service
            </h2>
            
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Let's try out our service  Let's try out our service  Let's try out our service  Let's try out our service  Let's try out our service
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Buttons/>
        </div>
    </section>
  )
}

export default Clients