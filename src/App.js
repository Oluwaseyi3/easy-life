import React, {} from 'react'
import styles from './style'

import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from './Home'
import { RouterProvider } from 'react-router';
import About from "./About"
import Member from './Member';
import { Footer, Navbar } from './components';
const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home/>}/>
       <Route index element={<Home/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/membership" element={<Member/>}/>
       </>
    )
   )
      

  return (

        <div  className='bg-primary w-full overflow-hidden'>
               <Navbar />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        
             <RouterProvider router={router}/>
             <Footer/>
        </div>

    </div>

   </div>
  )
}

export default App