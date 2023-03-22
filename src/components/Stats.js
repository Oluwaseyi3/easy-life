import React from 'react'
import { stats } from '../constants'
import styles from '../style'


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row  m-3`}>
            
          </div>
        ))}
    </section>
  )
}

export default Stats