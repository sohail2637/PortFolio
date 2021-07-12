import React,{useEffect} from "react";
import "./portfolio.css";
import useWebAnimations, {
  rubberBand,
} from "@wellyshen/use-web-animations";
import { data } from "./data";
const Portfolio = () => {
  const { ref } = useWebAnimations({ ...rubberBand });
  
  return (
    <div className="portcontainer" id="portfolio">
      <div className="title">
        <h1 style={{ margin: "20px 0px", textTransform: "uppercase" }}>
          Portfolio
        </h1>
      </div>
      <div className="nave items"></div>
      <div className="prjectcontainer">
        {data.map((item) => {
          return (
            <div className="projectimg" key={item.id}>
              <a href={item.link} target="_blank">
                <img src={item.img} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
