import React, { useState, useEffect } from "react";
import "./Careers.css";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  height: 40,
  width: 40,
  lineHeight: "45px",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  color: "#1A71FF",
  textAlign: "center",
  fontSize: 20,
  border: "0.5px solid #1A71FF",
};

function Careers() {

  useEffect(() => {  
         window.scrollTo(0, 0); 
            }, []);
  const [show, setShow] = useState(false);

  return (
    <div className="career-section">
      <Container>
        <h2 className="careers">Come work with us</h2>
        <p className="career__space">
          We are working on new and innovative ways to help businesses in Africa
          to grow quickly in the digital payment space.{" "}
        </p>

        <div id="our-openings">
          <button onClick={() => setShow(!show)} className="career--btn">
            Our positions
          </button>
        </div>
        <div className="career__space">
          <div id="content">
            {show ? (
              <div>
                {" "}
                <p>
                  Sorry, we currently do not have any openings at the moment
                </p>{" "}
              </div>
            ) : (
              show
            )}
          </div>
        </div>
      </Container>
      <br />
      <br />
      <BackTop>
        <div style={style}>
          <div className="">{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </div>
  );
}

export default Careers;
