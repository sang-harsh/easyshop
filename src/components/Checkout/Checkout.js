import React,{useState} from 'react'
import NavBar from '../NavBar/NavBar';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";


const steps = ["Shipping address", "Payment details"];
function getStepContent(step){
      switch(step){
            case 0:
            return <AddressForm/>
            case 1:
            return <PaymentForm/>
            default:
            throw new Error("Unknown Step");
      }
}

function Checkout() {
 
  const [activeStep,setActiveStep]=useState(0);

  const handleNext = () => {
        setActiveStep(activeStep+1);
        if(activeStep === steps.length-1){
              localStorage.removeItem("cart");
              localStorage.setItem("buynow","true");
        }
  }

  const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  return (
    <div>
      <NavBar/>
      <CssBaseline/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 , mt: 10}}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #
                    {
                      <strong>
                        {Math.floor(10000 + Math.random() * 90000)}
                      </strong>
                    }
                    . We have emailed your order confirmation, and will send you
                    an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>

    </div>
  )
}

export default Checkout;