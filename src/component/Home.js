import React from "react";
import useWebAnimations, {
  pulse,
  bounce,
  rubberBand,
} from "@wellyshen/use-web-animations";
import "./Home.css";

const Home = () => {
  const { ref, playState } = useWebAnimations({ ...pulse });


  return (
    <div className="homecontainer" id="home" ref={ref}>
      <div className="descontainer">
        <div className="namecontainer">
          <h1>Hello, I'm &nbsp; </h1>
          {/* <br/> */}
          <h1 h1 className="name">
            M Sohail Maqsood
          </h1>
        </div>
        <h2>I'm a full-stack web developer.</h2>
      </div>
    </div>
  );
};

export default Home;
