import React from "react";
import "./main.css";
import Nave from "./Nave";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


const Main = () => {
  return (
    <div className="maincontianer">
      <Nave />
      <Home  />
      <About  />
      <Portfolio  />
      <Contact id='contact' />
    </div>
  );
};

export default Main;
