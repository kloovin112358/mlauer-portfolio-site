import React, { useEffect, useRef } from 'react';
import { gsap, Power1, Sine } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const HomeSection = () => {
  const airplaneRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Initially hide the postAnimationText
    gsap.set(textRef.current, { opacity: 0 });

    // Create a GSAP timeline to handle the animations
    const tl = gsap.timeline();

    // Zoom-in animation for the airplane
    tl.to(airplaneRef.current, {
      duration: 8,
      scale: 14,
      ease: Power1.easeInOut
    })
    // Add the figure-eight pattern animation with rotation
    .to(airplaneRef.current, {
      duration: 8,  // Adjust duration as needed
      ease: Power1.easeInOut,
      motionPath: {
        path: [
          { x: 600, y: 60 },
          { x: 600, y: -120 },
          { x: -600, y: 60 },
          { x: -600, y: -120 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5
      },
    }, "-=7")
    // Final zoom-in and disappearance animation
    .to(airplaneRef.current, {
      duration: 3,
      scale: 150,
      opacity: 0,
      ease: Sine.easeInOut
    }, "-=1")
    // Fade in the postAnimationText after airplane animation completes
    .to(textRef.current, {
      duration: 1.75,
      opacity: 1,
      ease: Sine.easeIn
    }, "-=1");
  }, []);

  return (
    <section>
      <div className="container-fluid topContainer d-flex justify-content-center flex-column align-items-center" id="firstSection">
        <div className="text-center" id="postAnimationText" ref={textRef}>
          <h1 className="display-1 fw-bold nameHeader">Matt Lauer</h1>
          <p className="display-6 font-monospace">
            Aerospace Engineering Ph.D. at <span className="text-primary">UIUC</span>
          </p>
        </div>
        <img
          src="/undraw_aircraft.svg"
          alt="Aircraft"
          className="airplane mx-auto"
          style={{width:"8vw"}}
          ref={airplaneRef}
        />
      </div>
    </section>
  );
};

export default HomeSection;


