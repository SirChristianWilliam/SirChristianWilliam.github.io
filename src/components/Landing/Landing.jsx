import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Landing.css";
function Landing() {
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
    
      <div
        className={`fade-in ${
          isVisible ? "visible" : "hidden"
        } landingPageContainer`}
      >
        <div className="profileImgContainer">
          <img src=" ./ignoredImages/mePro2.jpg" />
          <div className="landingAboutContainer">
            <h2>Christian W Maki </h2>
            <h3>Full Stack Software Engineer</h3>
          </div>
        </div>
<div className="thankYou">
  <h2>
    Thanks
  </h2>
  <h2>
    For
  </h2>
  <h2>
    Stopping
  </h2>
  <h2>
    By!
  </h2>
</div>
        <div className="mobileTestimonials">
          <div className="mobileTIimg">
            <img src="./ignoredImages/marcc.png" width="200px" />
            <h4><a href="https://www.linkedin.com/in/the-marc-mccarthy/" target="_blank">Marc Mccarthy</a></h4>
            <p>
              {" "}
              "Christian has an energy about him that is simply different!
              "Christian is truly dedicated to building great things and I have
              no doubt he will continue to excel in his career."
              <p>
                <br></br>
                <a href="https://www.linkedin.com/in/christian-maki/" target="_blank">
                  Click to view the full testimonial
                </a>
              </p>
            </p>
          </div>

          <div className="mobileTIimg">
            <img src="./ignoredImages/tt.png" width="200px" />
            <h4><a href="https://www.linkedin.com/in/tiatheisen/" target="_blank">Tia Theisen</a></h4>
            <p>
              {" "}
              "Chris was always willing to take a look at my code and loved to help me problem-solve if I was stuck on anything"
              "Chris has demonstrated his ability to be highly adaptive, flexible, and to quickly pick up on new skills and technologies that are thrown his way."
              <p>
                <br></br>
                <a href="https://www.linkedin.com/in/christian-maki/" target="_blank">
                  Click to view the full testimonial
                </a>
              </p>
            </p>
          </div>
          <div className="mobileTIimg">
            <img src="./ignoredImages/momo.png" width="200px" />
            <h4><a href="https://www.linkedin.com/in/urlmohamedyusuf/" target="_blank">Mohamed Yusuf</a></h4>
             <p>
              {" "}
              "Chris is a natural leader and team player, who consistently goes above and beyond to help his colleagues and maintain a positive attitude"
              "I can confidently say that any company that hires him will not regret their decision. He is a great friend of mine and I am excited to see the positive and innovative changes he makes in the world."
              <p>
                <br></br>
                <a href="https://www.linkedin.com/in/christian-maki/" target="_blank">
                  Click to view the full testimonial
                </a>
              </p>
            </p>
          </div>
        </div>

        <div className="testimonials">
          <div className="scrollerContainer">
            <img
              src="./ignoredImages/marc.png"
              width="100%"
              className="hidetesto"
            />
          </div>

          <div className="scrollerContainer">
            <img
              src="./ignoredImages/tia.png"
              width="100%"
              className="hidetesto"
            />
          </div>

          <div className="scrollerContainer">
            <img
              src="./ignoredImages/mohamed.png"
              width="100%"
              className="hidetesto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
