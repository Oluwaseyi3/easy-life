import React, {useLayoutEffect, useRef} from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import Card from '@mui/material/Card';
import { gsap } from 'gsap';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import market from "../assets/market.png"
import styles from "../style"
import  brook  from '../assets/brook.jpg';
import barca from "../assets/barca.png"
import car from "../assets/car.png"
import fam from "../assets/fam.jpg"
import spread from "../assets/spread.png"
import bulb from "../assets/bulb.png"

import  Buttons  from '../components/Buttons';

const Member2 = () => {
  const imgRef = useRef();
  const textRef = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  
  useLayoutEffect(() => {
    gsap.from(imgRef.current, {opacity: 0, y: 200, duration: 1});
    gsap.from(textRef.current, {opacity: 0, y: 200, duration: 2});
    gsap.from(text2Ref.current, {opacity: 0, y: 200, duration: 2.5});
    gsap.from(text3Ref.current, {opacity: 0, y: 200, duration: 3});
  
  }, [])
  return (
    <div>
       <div className={`text-center p-7 text-[30px]  ${styles.paddingX }`} ref={imgRef}>
       Over 1000+ Members 
       </div>
       <div className='w-[100%] flex flex-col md:flex-row p-6 mt-4 items-start justify-center max-h-[70vh] h-[100%] gap-8'>
            <div>
           
            <img src={brook} alt="" className=" w-[30rem] h-[100%] rounded-xl" ref={imgRef}/>
              </div>
           
           <div className='flex flex-col gap-8 text-left max-w-[40rem]' ref={imgRef}>
               <h1 className='text-[30px] font-bold'>Why become a member?</h1>
               <p className='text-[20px] '>Easylife Cooperative is here to inject savings habits into its members so that their future would be planned and secured</p>
               <div className='w-[10rem]'>
               <Buttons title="About Us "/>
               </div>
              
            </div>
       </div>
        <div className={`${styles.paddingX } ${styles.paddingY } mt-10 flex flex-row gap-10 sm:py-16 py-6 items-center justify-center flex-wrap`}>
     <Card sx={{ maxWidth: 350 }} ref={imgRef}>
      <CardMedia
        sx={{ height: 180 }}
        image={fam}
        title="green iguana"
      />
      <CardContent>
  
        <h2 className='text-[20px]  h-[250px]  p-5'>
        Members get to Interact, Network and brainstorm with other entrepreneurs and like-minded professionals.
        </h2>
      </CardContent>

    </Card>



    <Card sx={{ maxWidth: 345 }} ref={text2Ref}>
      <CardMedia
        sx={{ height: 180 }}
        image={bulb}
        title="green iguana"
      />
      <CardContent>

        <h2 className='text-[20px] h-[250px] p-5'>
        Members save Regular, encouraging modest living, personal improvement opportunities and a more productive life.
        </h2>
      </CardContent>

    </Card>


    <Card sx={{ maxWidth: 345 }} ref={text3Ref}>
      <CardMedia
        sx={{ height: 180 }}
        image={car}
        title="green iguana"
      />
      <CardContent>
        
        <h2 className='text-[20px]  h-[250px] p-5'>
     Group financing has also proven to be a huge source for Business funding rather than the hard-to-get bank loans that you have to collateralize your entire livelihood.
        </h2>
      </CardContent>
      
    </Card>

    

    <Card sx={{ maxWidth: 345 }} ref={text3Ref}>
      <CardMedia
        sx={{ height: 180 }}
        image={spread}
        title="green iguana"
      />
      <CardContent>
    
        <h2 className='text-[20px] h-[250px] p-5'>
        	Members get access to Funding for both personal and business needs at a very little interest rate.
        </h2>
      </CardContent>
   
    </Card>
   
  
</div>
    </div>
    
  )
}

export default Member2