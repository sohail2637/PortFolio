import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleUp,
  FaFacebookSquare,
  FaInstagram,
  FaCodepen,
  FaLinkedinIn,
} from "react-icons/fa";
import { init, send } from "emailjs-com"; //   ////     Emailjs  dependencies
init("user_0IjgNpd9ghWogUI61k2tr");

// import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_i30mr8o",
      "template_munzbnt",
      toSend,
      "user_0IjgNpd9ghWogUI61k2tr"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        e.target.reset();
        setToSend({ message: ''});
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });;
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" id="contact">
      <div className="contactcontainer">
        <div className="contacttitle">
          <h1>Contact </h1>
        </div>
        <div className="formdescon">
          <h5>Have a question or want to work together?</h5>
        </div>
        <div className="formcotainer">
          <form onSubmit={onSubmit}>
            <div className="namecont">
              <input
                type="text"
                name="from_name"
                placeholder="from name"
                value={toSend.from_name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="emailcont">
              <input
                type="email"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                required
                onChange={handleChange}
              />
            </div>
            <div className="namecont">
              <textarea
                type="text"
                name="message"
                required
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
            <div className="submitcontainer">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="upwordcontaier">
          <a href="src/component/Home.js">
            <FaAngleDoubleUp style={{color:'#fff'}} />
          </a>
        </div>
        <div className="footerlinkcon">
          <div className="socialcontainer">
            <div className="socialicon">
              <a href="https://www.facebook.com/profile.php?id=100006134478881">
                <FaFacebookSquare />
              </a>
            </div>
            <div className="socialicon">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="socialicon">
              <a href="https://www.instagram.com/sohailmaqsood8/">
                <FaInstagram />
              </a>
            </div>

            {/* <div className="socialicon">
              <a href="">
                <FaCodepen />
              </a>
            </div> */}
          </div>
          <h6>
            M Sohail Maqsood <b style={{ color: "#DC587D" }}>2019</b>
          </h6>
         {/* <a href={"mailto:" + 'sohail25816@gmail.com'}>
           sohail25816@gmail.com
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
