import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../style'
import Buttons from "./Buttons"
import {People, coopimage, group1, group2} from "../assets"




const Hero = ({ boxRef, redRef ,imgRef, circleRef, subTextRef}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
    <section id="home" className={`flex md:flex-row flex-col `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px:0 sm:px-16 px-6`}>
              <div className='flex flex-col items-start gap-5 py-[10px]  bg-primary rounded-[10px] mb-2'>
                    <div  className={`box flex flex-row justify-between items center w-full`} >
                        <h1 ref={boxRef} className='  flex-1 leading-[90px] font-poppins font-semibold ss:text-[62px] text-[42px] text-black leading-[75px]'>
                        The new age<br />
                        co-operative <br/>
                        society
                        </h1>
                    </div>
                    <div>
                    <p className= "max-w-[470px] mt-5 text-black font-poppins " ref={subTextRef}>
               A new way to Save, Invest, Loan & Grow your Business
              </p>
                    </div>

                

              <div>
                <Buttons title="Get started" />
              </div>

              <div>
                  <img src={People} alt=""/>
                </div>
              <div>
                <p>12,000+ people already joined the easy life cooperative. Get started today!</p>
              </div>
              </div>
             

            
        </div>
        <div ref={imgRef} className="w-[100vh] h-[100%]">

            <img src={coopimage} alt="image"  className="md:w-[100%] w-[50%] object-contain"/> 
           
        
        
        </div>
        
    </section>
     <div className='flex justify-center items-center h-[50%] '>
       <h2 className='text-stone-400 py-5 pb-5 font-poppins text-center text-[30px] sm: text-[30px] w-[100%]'>10+ years of Great Services</h2>
     </div>
     <div className='flex justify-center items-center h-[30vh] flex-col w-[100%]'>
       <h2 className='text-grey font-bold text-[50px] font-poppins'>Who we are</h2>
       <div className='flex flex justify-center items-center '>
         <div className='flex flex-row justify-between w-[100%]'>
         {
          !matches && <img src={group1}/>
         } 
         <p className='w-[100%] text-center sm: w-[100%] p-5'>
          Easylife ventures cooperative society has a mandate to help entrepreneurs build a strong culture of saving while providing access to loans that will promote personal and collective socio-economic growth and development.
          </p>
          {
          !matches && <img src={group2}/>
         } 
         </div>
         
       </div>
     </div>
    </div>
  )
}

export default Hero