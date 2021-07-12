import React,{useEffect} from "react";
import "./About.css";
import {
  FaTachometerAlt,
  FaMobileAlt,
  FaIdeal,
  FaRocket,
} from "react-icons/fa";
import useWebAnimations, { backInUp } from "@wellyshen/use-web-animations";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import {} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
// import { duration } from "@material-ui/core";

const About = () => {
  const html = 95;
  const css = 80;
  const js = 85;
  const react = 95;
  const uides = 90;
  const { ref, } = useWebAnimations({ ...backInUp });

 useEffect(() => {
   AOS.init({ duration: 2000 });
 },[]);



  // <CircularProgressbar value={percentage} text={`${percentage}%`} />;
  return (
    <div className="aboutcontainer" id="about">
      <div className="title">
        <h1 className="pagetitle">About</h1>
      </div>
      <div className="aboutcardcon">
        <div className="aboutcard" data-AOS="fade-up">
          <div className="">
            <div class="hexagon">
              <FaTachometerAlt className="icons" />
            </div>
          </div>
          <div className="aboutdesc">
            <h2>Fast</h2>
            <h4>
              Fast load times and lag free interaction, my highest priority.
            </h4>
          </div>
        </div>
        <div className="aboutcard" data-AOS="fade-up">
          <div className="">
            <div class="hexagon">
              <FaMobileAlt className="icons" />
            </div>
          </div>
          <div className="aboutdesc">
            <h2>Responsive</h2>
            <h4>My layouts will work on any device, big or small.</h4>
          </div>
        </div>
        <div className="aboutcard" data-AOS="fade-up">
          <div className="">
            {" "}
            <div class="hexagon">
              <FaIdeal className="icons" />
            </div>
          </div>
          <div className="aboutdesc">
            <h2>Intuitive</h2>
            <h4>Strong preference for easy to use, intuitive UX/UI.</h4>
          </div>
        </div>
        <div className="aboutcard" data-AOS="fade-up">
          <div className="">
            {" "}
            <div class="hexagon">
              <FaRocket className="icons" />
            </div>
          </div>
          <div className="aboutdesc">
            <h2>Dynamic</h2>
            <h4>
              Websites don't have to be static, I love making pages come to
              life.
            </h4>
          </div>
        </div>
      </div>
      <div className="skillcontainer">
        <div className="aboutmecont">
          <div className="aboutmecard">
            <div className="">
              <div class="hexagonme">
                <img src="/myimg.png" />
              </div>
            </div>
            <div className="aboutdesc">
              <h2>Who's this guy?</h2>
              <h4>
                I'm a Front-End Developer from Pakistan. I have a serious
                passion for UI effects, animations, and creating intuitive,
                dynamic user experiences.{" "}
                <a href="#">Let's make something special.</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="aboutskillcont">
          {/* <div > */}
          <div className="aboutskillcont">
            <CircularProgressbarWithChildren value={html}>
              <h2>HTML</h2>
              <div style={{ fontSize: 12, marginTop: -5, color: "#000" }}>
                <strong>{html}%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="aboutskillcont">
            <CircularProgressbarWithChildren value={css}>
              <h2>Css</h2>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{css}%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="aboutskillcont">
            <CircularProgressbarWithChildren value={js}>
              <h2>Java Script</h2>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{js}%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="aboutskillcont">
            <CircularProgressbarWithChildren value={react}>
              <h2>React</h2>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{react}%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="aboutskillcont">
            <CircularProgressbarWithChildren value={uides}>
              <h2>UI Design</h2>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>{uides}%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;

{
  /* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
          {(percentage) => (
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          )}
          </ChangingProgressProvider> */
}
