import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import "./AboutPage.css";
function AboutPage() {

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

  
  return (
    <>
      <div id="aboutContainer"  className={`fade-in ${isVisible ? 'visible' : 'hidden'}`}>
        <h1>My Journey</h1>

        <p>
          All my life, I've been fascinated by the unknown. Existential dread
          was a staple of my childhood. When I listen to music, look at art, or
          read a good book, I always think about the creative process that goes
          into it. I <i>hear</i> the specific notes, consider the brush strokes, and{" "}
          <i>feel</i> the poetry of words written on each page. Yeah, that sounds pretentious now that I'm reading 
          it back, but it's nonetheless true! 
        </p>
        <p>
          Having this perspective, this curiosity, led me down unconventional
          paths. I thought to myself that there's no reason I can't do these
          things, to <i>create</i>, and I wanted to prove it to myself. I've dabbled in a lot of
          different mediums due to this thought process.
        </p>
        <p>
          One of these paths led me to Scratch, a very "high-end" coding program
          for kids. At 13 years old, I became obsessed with creating animations
          and games, all while not really understanding that I was being
          introduced to programming at the time. After hundreds of projects,
          highschool began to take up more of my time, and I put Scratch on the
          back-burner and forgot about it.
        </p>
        <p>
          This didn't mean my curiosity lessened, and I never stopped trying to
          bring my ideas to life. I expressed my creativity in a new way,
          creating videos with my friends. We dabbled in horror, comedy, and
          other genres. They were extremely embarrassing and the acting was
          awful, so I will never let them see the light of day, but I had a
          great time making them and the memories that came with them.
        </p>
        <p>
          Highschool ended, and I was... lost. I couldn't think of a career that I
          would enjoy. I needed something that challenged my mind, and at the
          time, my body. Exercise is a big part of my life so that's why I gravitated towards
          Firefighting. 2014-2016, I devoted my time to this field, and then I
          graduated. And I felt even more lost.
        </p>
        <p>
          I realized that this isn't what I wanted to do after all and
          the pressure of going to college was really the only reason I went.
        </p>
        <p>
          I of course needed to get a job in the meantime, so I ended up waiting tables.
          From 2017 to 2022, I spent my time serving, trying to
          save money, and generally coasting until I figured out who I was meant to be. The problem was, after
          the first year or so, I was doing absolutely nothing to challenge
          my mind. That creativity I've always had lay unused and covered in dust. Over the years the
          dull roar got louder and louder and louder, until one day I wasn't in a great place, mentally. I
          realized I absolutely couldn't go on like this and needed to make a change.
        </p>
        <p>
          Covid struck everyone by surprise in 2019. As I was living with my
          grandparents at the time, I decided it was in their best interests
          that I claim unemployment and ride it out so I could decrease the likelihood of 
          spreading it to them. During this time, I was
          able to get back to my creative roots. I had time to read, I had time
          to make music, and I even started a Youtube channel where I would
          splice video clips together and edit them into "funny" parodies. (Again, embarrassing. But fun.)
        </p>
        <p>
          My life quickly changed for the worse. My dad had been recently 
          diagnosed with ALS, and he passed away January 1st, 2020, the day after his birthday.
        </p>
        <p>
          As Covid died down and the pressure of returning to my monotonous job surfaced, I
          felt a dread like I've never had before on top of dealing with the loss of my dad. I thought about spending the
          rest of my life working in restaurants and continuing to be that robot
          that did the same routine, day-in day-out. I thought about what my dad
          would think if I made nothing of my life and didn't pursue my
          passions. But, as is the way of a responsible adult, I went back.
        </p>
        <p>
          From that point, I spent many days, if not weeks, thinking on what I needed to do to change this
          slow, painful death I felt I was going through. I asked myself a similar question from when I graduated
          highschool; "What career would I enjoy where I'm able to express my creativity and challenge my mind?"        
          </p>
        <p>
          One idea that crossed my brain- <i>programming!</i> The second I had
          this thought, I made the connection that I already have experience
          coding, putting in all those hours on Scratch. I felt a little... "dull", for not piecing together
          earlier that I already had some experience in this area, but I didn't let that stop
          me from immediately researching what I needed to do to break into the
          industry.
        </p>
        <p>
          I concluded that I would spend a year learning JavaScript, CSS, and HTML. I quit
          my job. I then spent every day for 9 months, 6+ hours a day learning
          the fundamentals. I knew this would be a long journey so around the 6
          month mark, I began looking for a place I could accelerate my
          learning. Of all the establishments I came across, I ended up choosing Prime Digital Academy, a school with a high job
          placement rate that provides real, on-the-job experience.
        </p>
        <p>
          August 15th, 2022, I attended my first day of class. From that date
          until graduation on January 13th, 2023, my life began to change. I could not believe I
          waited this long. Coding for me became a passion. I was, and am, able
          to express myself creatively. There is never a day that goes by where I'm not pushing my mind further 
          and further. As I immersed myself deeper and deeper
          into the world of programming, I began to unlock new possibilites.
          With each project I created, I became more confident in my abilities
          as a Software Engineer. As I apprehensively approached our curriculum's "Solo Projects" week, I
          instantly thought of how I could relate it to my dad.
        </p>
        <p>
          Thus, "Missing Link" was born. I was able to honor him by developing an
          application that finds patients with diagnosed medical conditions and
          compare their respective attributes with eachother. I intend to
          develop this project further in the future for the entire world to
          use. The potential is vast and will assist researchers with finding
          cures for currently "incurable" diseases/conditions (Click "Projects &#38; More" at the top 
          left of this page to experience the demo).
        </p>
        <p>
          Prime Digital Academy taught me so much and filled in those gaps I was
          missing from my year of self-study. I practiced peer review, participated and led group projects,
          received real work experience with real companies, developed Full Stack
          applications, and developed my leadership abilities further than I had
          thought possible. Most importantly, I developed a portfolio showcasing
          my <i>proven</i> skills and experiences and gained the confidence to adapt in any situation.
        </p>
        <p>
          I am so thankful I was given the opportunities to reach this point in
          my life, and I'm so excited to see where it takes me. I'm able to
          channel my creative side while also producing meaningful
          products for myself and others. And honestly, even with everything I've gone through, 
          I'm the happiest I've ever been...maybe <i>because</i> of all that I've been through.
        </p>
        <p>
          Thanks for reading, and I hope you have a better understanding of who
          I am. Feel free to reach out at any time for any reason!
        </p>
      </div>
    </>
  );
}

export default AboutPage;
