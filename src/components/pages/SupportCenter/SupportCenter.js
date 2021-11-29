import React, { useEffect } from "react";
import "./SupportCenter.css";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeSection8 from "../../Home/HomeSection8";
import { homeEight } from "../HomePage/Data";

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



function SupportCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="support-center" id="bg-support">
        <h2 className="hi">Hi! How can we help?</h2>
        <span className="curve"></span>

      </div>
      <Container>
        <h3 className="step-support">
          For Support, you can easily reach us at hello@deempay.com. We are only
          a step away.{" "}
        </h3>
      </Container>
      <div className="spacing-down"></div>
      <div className="support-top">
        <HomeSection8 {...homeEight} />
      </div>

      <BackTop>
        <div style={style}>
          <div className="">{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </div>
  );
}

export default SupportCenter;
