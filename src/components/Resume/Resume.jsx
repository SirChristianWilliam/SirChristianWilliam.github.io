import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./Resume.css";
function Resume() {

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

  return (
    <>
       <div className={`fade-in ${isVisible ? 'visible' : 'hidden'} resumeContainer`}>
        <h3 className="clickToOpen">
          <a href="./ignoredImages/Christian Maki Resume.pdf" target="_blank">
            If you can't see resumé, click here to view in a new tab
          </a>
        </h3>
        <iframe
          className='iframeresume'
          width="75%"
          height="900px"
          src="./ignoredImages/Christian Maki Resume.pdf"
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
