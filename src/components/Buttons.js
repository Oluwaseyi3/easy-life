import React from 'react'

const Buttons = ({styles, title}) => {
  return (
    <button
     type='button' className={`py-4 px-9 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >  {title}</button>
  )
}

export default Buttons