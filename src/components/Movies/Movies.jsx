import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
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
    label: "Home Page/ Movies List",
    imgPath: "./ignoredImages/netclips1.png",
  },
  {
    label: "Hover On Selection Demo",
    imgPath: "./ignoredImages/netclips2.png",
    width:'auto',
    height:'auto'
  },
  {
    label: "Selected Film",
    imgPath: "./ignoredImages/netclips3.png",
  },
  {
    label: "Return to Movies List",
    imgPath: "./ignoredImages/netclips4.png",
  },
];

function Movies() {
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
        Netclips
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
         Netclips is my solution for organizing your movie collection in a warm, 
         comfortable, and familiar manner. Currently, users are able to view the current list 
         of movies that are saved in the database. Upon selection, they are able to 
         view the details of the film, as well as the specific genres for that movie. 
         The site is fun and interactable, with a very cohesive and welcoming vibe. At least, you know, 
         in my opinion. Check back once in a while as I'll be adding the ability to 
         create, edit, and delete movies from this collection so that you'll be able to 
         create your own personalized favorite list of flicks!
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
          <Typography>Oh, but is it responsive?</Typography>
        </AccordionSummary>
        <AccordionDetails className="wireframeContainerContainer">
          <Typography >
          <img className="wireframeImg" src="./ignoredImages/netclips6.png"  ></img>
          <h4 >It sure is!</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
 
</>
  );
}

export default Movies;
