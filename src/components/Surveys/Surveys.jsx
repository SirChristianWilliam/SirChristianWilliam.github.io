import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Surveys.css";
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
    label: "Landing Page/ Feeling",
    imgPath: "./ignoredImages/feedback1.png",
  },
  {
    label: "Landing Page Input/ Feeling",
    imgPath: "./ignoredImages/feedback2.png",
  },
  {
    label: "Understanding (page 2)",
    imgPath: "./ignoredImages/feedback3.png",
  },
  {
    label: "Supported (page 3)",
    imgPath: "./ignoredImages/feedback4.png",
  },
  {
    label: "Comments (page 4)",
    imgPath: "./ignoredImages/feedback5.png",
  },
  {
    label: "Review Answers",
    imgPath: "./ignoredImages/feedback6.png",
  },
  {
    label: "Confirmation Page",
    imgPath: "./ignoredImages/feedback7.png",
  },
  {
    label: "Admin View",
    imgPath: "./ignoredImages/feedback8.png",
  },
];

function Surveys() {
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
        href="https://redux-surveys.herokuapp.com/#/"
        target="_blank"
        className="mlh1"
      >
        {" "}
        Redux Surveys
      </a>
      <Box sx={{ flexGrow: 1 }} className="imageBox reduxBox">
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
         Redux Surveys is a demonstrational practice assignment where 
         I was first introduced to Redux, storing/changing state, 
         and creating a functional survey for users! 
         As I was about to post this project, I realized the styling was 
         horrendous, so I met up with my old friend Midjourney and created an 
         aesthetic background image and modeled the rest of the styling surrounding it. 
         Admins are also able to view their admin page (you will have to add "admin" at 
         the end of the URL on the deployed site), and view past responses. This site is also 
         mobile responsive and looks good on almost all viewports! Feel free to leave some feedback!
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
          <Typography>Click to view a surprise</Typography>
        </AccordionSummary>
        <AccordionDetails className="wireframeContainerContainer">
          <Typography className="wireframeImgContainer">
          <img className="wireframeImg" src="./ignoredImages/meme.jpg"  ></img>

          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
 
</>
  );
}

export default Surveys;
