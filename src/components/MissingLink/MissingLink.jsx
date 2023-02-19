import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./MissingLink.css";
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
    label: "Login Page",
    imgPath: "./ignoredImages/mlink1.png",
  },
  {
    label: "Landing Page / Search Page",
    imgPath: "./ignoredImages/mlink2.png",
  },
  {
    label: "Search Page example",
    imgPath: "./ignoredImages/mlink3.png",
  },
  {
    label: "Results Page",
    imgPath: "./ignoredImages/mlink4.png",
  },
  {
    label: "Results Page condition comparisons",
    imgPath: "./ignoredImages/mlink5.png",
  },
  {
    label: "Results Page adding access key",
    imgPath: "./ignoredImages/mlink6.png",
  },
  {
    label: "Profile Page",
    imgPath: "./ignoredImages/mlink7.png",
  },
  {
    label: "Questions Page",
    imgPath: "./ignoredImages/mlink8.png",
  },
  {
    label: "Questions Page usage example",
    imgPath: "./ignoredImages/mlink9.png",
  },
];

function SwipeableTextMobileStepper() {
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
        href="https://missinglinksolo.herokuapp.com/#/"
        target="_blank"
        className="mlh1"
      >
        {" "}
        Missing Link
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
          Missing Link fills in the gaps for researchers in the medical field by
          discovering commonalities between patients with the same condition or
          disease. Including symptoms, where Missing Link really shines is in
          the comparisons between specific personal attributes, such as hair
          color, height, weight, time you wake up, time you go to sleep, where
          you grew up, etc. Individually, any similarity between patients would
          be a coincidence. But by having such a vast data set of information,
          researchers can visually compare the number of instances of each
          personal attribute between patients. For example, if 5000 patients
          with a rare form of cancer have answered all of these questions, and
          90% have the same answer regarding the city they currently live in,
          that would raise some eyebrows. It would be especially suspicious if a
          business in that same city had a chemical spill 20 years prior. Or,
          let's say 85% of all patients with ALS reported being left handed.
          Researchers will use this data to pave the way for future medical
          trials and testing, using the power of Missing Link to get them there.
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
          <Typography>Click to view intial schema prototype</Typography>
        </AccordionSummary>
        <AccordionDetails className="wireframeContainerContainer">
          <Typography className="wireframeImgContainer">
          <img className="wireframeImg" src="./ignoredImages/mlinkwireframe.png"  ></img>

          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
 
</>
  );
}

export default SwipeableTextMobileStepper;
