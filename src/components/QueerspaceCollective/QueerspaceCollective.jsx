import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// import "./MissingLink.css";
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
    imgPath: "./ignoredImages/queerspace11.png",
  },
  {
    label: "Landing Page",
    imgPath: "./ignoredImages/queerspace1.png",
    width:'auto',
    height:'auto'
  },
  {
    label: "Upcoming Events",
    imgPath: "./ignoredImages/queerspace3.png",
  },
  {
    label: "Feedback Form",
    imgPath: "./ignoredImages/queerspace4.png",
  },
  {
    label: "User Search Page",
    imgPath: "./ignoredImages/queerspace5.png",
  },
  {
    label: "User Registration Page",
    imgPath: "./ignoredImages/queerspace6.png",
  },
  {
    label: "Admin Event View Page",
    imgPath: "./ignoredImages/queerspace7.png",
  },
  {
    label: "Search Events Example",
    imgPath: "./ignoredImages/queerspace8.png",
  },
  {
    label: "Add New Resource Page",
    imgPath: "./ignoredImages/queerspace9.png",
  },
  {
    label: "View Specific Event",
    imgPath: "./ignoredImages/queerspace10.png",
  },
];

function QueerspaceCollective() {
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
        href="https://www.youtube.com/watch?v=0hBSFy44nWM&list=PLo9U1DCI2cVwjubh2HLulljIhdLTsC9Dj"
        target="_blank"
        className="mlh1"
      >
        {" "}
        Queerspace Collective
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
          QUEERSPACE collective (QS) is a Minneapolis based company with the 
          goal of connecting LGBTQ+ youth with adult mentors, allowing 
          them to feel comfortable with being who they are. QS reached out to my team 
          and I in order to streamline some of their current functionalities, primarily 
          involving a way to create, update, edit, and delete users and events in one 
          combined application. We created not only the ability for event creation, but 
          also incorporated current resources from their existing website such as 
          their established mentor feedback form and resources page. This allows users to not 
          have to keep switching between apps to locate the information they are looking for. 
          QS places a heavy emphasis on security, so we were tasked with routing accesses 
          and views dependent upon the current user that's logged in, whether it's Admin, Mentor, 
          Mentee, Volunteer, or Caregiver. This app has the ability to create user accounts 
          by sending an email with a temporary password, search through all users using advanced 
          parsing methods, and add personal information to their personal profile such as pictures 
          and bios to create a more personalized and comfortable experience. 
       
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
          <Typography>Click to view initial schema prototype</Typography>
        </AccordionSummary>
        <AccordionDetails className="wireframeContainerContainer">
          <Typography className="wireframeImgContainer">
          <img className="wireframeImg" src="./ignoredImages/queerspacewireframe.png"  ></img>

          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
 
</>
  );
}

export default QueerspaceCollective;
