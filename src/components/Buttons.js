import React from 'react'

const Buttons = ({styles}) => {
  return (
    <button
     type='button' className={`py-4 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >  Join Us Now</button>
  )
}

export default Buttons