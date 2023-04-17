import React from 'react'

const Outline = ({styles, title}) => {
  return (
    <button
    type='button' className={`py-4 px-9 rounded-xl bg-red-500 font-poppins font-medium text-[18px] text-primary outline-blue-500 ${styles}`}
   >  {title}</button>
  )
}

export default Outline