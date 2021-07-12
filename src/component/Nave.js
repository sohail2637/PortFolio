import React, { useState } from "react";
import "./nave.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nave = () => {
  const [toogle, setToogel] = useState(false);
  
  return (
    <div>
      <div className="naveContainer">
        <div className="item">
          <a href="#home" className="link" onClick={() => setToogel(false)}>
            Home
          </a>
        </div>
        <div className="item">
          <a className="link" href="#about" onClick={() => setToogel(false)}>
            About
          </a>
        </div>
        <div className="item">
          <a
            className="link"
            href="#portfolio"
            onClick={() => setToogel(false)}
          >
            PortFolio
          </a>
        </div>
        <div className="item">
          <a className="link" href="#contact" onClick={() => setToogel(false)}>
            Contact
          </a>
        </div>
      </div>
      {/* ....... menue for mobile */}
      <div className="menuecotainer">
        <div className="menucontainer">
          <div className="menuicon">
            <FaBars onClick={() => setToogel(!toogle)} />
          </div>
        </div>
      </div>
      {toogle ? (
        <div className="menuitem">
          <div className="item">
            <a href="#home" className="link" onClick={() => setToogel(false)}>
              Home
            </a>
          </div>
          <div className="item">
            <a className="link" href="#about" onClick={() => setToogel(false)}>
              About
            </a>
          </div>
          <div className="item">
            <a
              className="link"
              href="#portfolio"
              onClick={() => setToogel(false)}
            >
              PortFolio
            </a>
          </div>
          <div className="item">
            <a
              className="link"
              href="#contact"
              onClick={() => setToogel(false)}
            >
              Contact
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nave;
