// import React from 'react'
// import styles from '../style'
// import Buttons from "./Buttons"
// import { layout } from '../style';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import {usera, userb, userc, userd} from "../assets"

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'Mrs Gladys A.',
//     imgPath:
//      usera,
//      text:"I'm actually very happy about Easylife Coop, for maybe 7 years now or so, they have made me cultivate the habit of saving. At the end of the month I'm always surprised that I was able to save this much, you should join too. "
//   },
//   {
//     label: 'Mr Popoola T',
//     imgPath:
//     userb,
//     text: " My Business and my Family have benefited greatly from Easylife Coop, seeing is believing. They are trustworthy and consistent."
//   },
//   {
//     label: 'Mr Haruna M',
//     imgPath:
//     userc,
//     text: " My Business is better today because I choose to stay with Easylife Coop, many people have come and taken peoples money away but over 10 years now Easylife coop has been here, God bless you people  "
//   },
//   {
//     label: 'Mrs Evelyn A',
//     imgPath:
//     userd,
//     text:"Easylife Coop is the best, they have helped many of us in this Abuja to improve our Business and save our money daily"
//   },
// ];


// const Carousel = () => {
//     const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };


//   return (
//     <section  className={layout.sectionReverse }>
//         <div className='flex items-center md:justify-start  justify-center h-[100] mt-10 mb-5 p-3 w-[100%]'>
//     <Box sx={{ maxWidth: 270, flexGrow: 1 }}>
//     <Paper
//         square
//         elevation={10}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 200,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <div className='text-[15px]'>{images[activeStep].text}</div>
//       </Paper>

//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//                 <>
//                   <Paper>
//               <Box
            
//               square
//               elevation={10}
//                 component="img"
//                 sx={{
//                   height: 155,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
                
//               />
//                 </Paper>
//               </>
            
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <Paper
//         square
//         elevation={10}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <div  className='text-[25px]'>{images[activeStep].label}</div>
//       </Paper>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
         
//     </Box>
    
//     </div>
//     </section>
//   )
// }

// export default Carousel