import React,{useState} from "react";
import { layout } from "../style";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import div from '@mui/material/div';
const steps = [
    {
      label: 'Apply',
      description: `Choose your loan amount & tenure then share some information about yourself`,
    },
    {
      label: 'Verify',
      description:
        'We verify the information that you have provided',
    },
    {
      label: 'Receive loan',
      description: `Get money in your bank account or physically at the office within 24 hours if your loan is approved`,
    },
  ];
  

const Servicework = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
        <div>
              <section className={`${layout.section} w-full pb-10 px-10 py-10 items:center gap-5 justify-evenly  h-[85] bg-black text-white `}>
                    <div className="text-[40px] w-500 items-center">
                    How it works
                    </div>

                    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <div  className="text-[30px]">Last step</div>
                ) : null
              }
            >
                <div className="text-[30px] text-white">
                {step.label}
                </div>
            
            </StepLabel>
            <StepContent>
              <div className="text-[25px]">{step.description}</div>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 1, backgroundColor: "black" }}>
          
           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button> 
        </Paper>
      )}
    </Box>
              </section>
        </div>
      );
}
 
export default Servicework;