import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Todo.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Main Page",
    imgPath: "./ignoredImages/todo1.png",
  },
  {
    label: "Marking Tasks as Complete/Incomplete",
    imgPath: "./ignoredImages/todo2.png",
  },
  {
    label: "Delete Task w/Confirmation",
    imgPath: "./ignoredImages/todo3.png",
  },
  {
    label: "Adding a New Task",
    imgPath: "./ignoredImages/todo4.png",
  },
  {
    label: "Task Successfully Added (see bottom of list)",
    imgPath: "./ignoredImages/todo5.png",
  },
  {
    label: "Overflow Management for Longer Lists",
    imgPath: "./ignoredImages/todo6.png",
  },
  {
    label: "Viewport Responsive Design ",
    imgPath: "./ignoredImages/todo7.png",
  },
];

function Todo() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      setIsVisible(false);
    }
    isFirstRender.current = false;
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [isVisible]);

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <div
      className={`fade-in ${
        isVisible ? "visible" : "hidden"
      } landingPageContainer`}
    >
      <a
        href="#"
        target="_blank"
        className="mlh1"
      >
        {" "}
        To-do List
      </a>
      <Box sx={{ flexGrow: 1 }} className="imageBox">
        <Paper
          className="bannerTop"
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            pl: 2,
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          interval={5000}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  className="imageBoxImg"
                  component="img"
                  sx={{
                    height: "50%",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          className="bannerBottom"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>

      <div className="mlinkDesc">
        <h1>Problem it solves:</h1>
        <p>
          To-do list, a must for any new web developer. 
          Because to-do lists are such a commonly created app, I decided 
          to go a bit above and beyond with the styling to set it apart. 
          This project involved connecting an external database and 
          server/client side communications 
          for adding, deleting, and updating tasks. If you're like me, when 
          adding tasks of what I need to get done, I almost always do this on 
          my phone. Such as it is, this app is viewport responsive and allows usage 
          on almost all screen sizes. Click the link at the top of the page and try it out!
        </p>
      </div>

    </div>

    <div className="wireframeDivAccordianContainer">
      <Accordion >
        <AccordionSummary  
          className="wireframeAccordian"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          // id="panel1a-header"
        >
          <Typography> Extra Project Details </Typography>
        </AccordionSummary>
        <AccordionDetails className="wireframeContainerContainer">
          <Typography  >
          Background image for this project is provided by: &nbsp; 
          <a href="https://wallpaperaccess.com/notebook" target="_blank">wallpaperaccess</a>
                  </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
 
</>
  );
}

export default Todo;
