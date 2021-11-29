import React, { useEffect } from "react";
import "./About.css";
import { FaAngleUp } from "react-icons/fa";
import HomeSection8 from "../../Home/HomeSection8";
import { homeEight } from "../HomePage/Data";
import { BackTop } from "antd";
import {
  InfoContainer0,
  InfoWrapper0,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  InfoContainer2,
  InfoWrapper2,
  InfoRow2,
  Column3,
  Column4,
  TextWrapper2,
  ImgWrap2,
} from "./AboutElements";

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

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <InfoContainer0>
        <InfoWrapper0>
          <h2 className="about">About</h2>
          <p className="about__cheap">
            We use latest innovation and technology to enable merchants accept
            in-store or in-person payment from their customers digitally via
            using only their smartphones with the help of QR code technology.
          </p>

          <div className="about-img">
            <img
              src="images/About.png"
              alt="web-app"
              width="70%"
              height="auto"
            />
          </div>
        </InfoWrapper0>
      </InfoContainer0>

      <InfoContainer2>
        <InfoWrapper2>
          <InfoRow2>
            <Column3>
              <TextWrapper2>
                <img
                  src="images/our-vision.png"
                  alt="our-vison"
                  className="aboutimg"
                  width="95%"
                  height="auto"
                />
              </TextWrapper2>
            </Column3>
            <Column4>
              <ImgWrap2>
                <h2 className="our__vision">Our Vision</h2>
                <p className="vision">
                  Our vision is to enable every businesses in Africa accpect
                  payment digitally.
                </p>
                <div className="speed__img">
                  <img
                    src="images/vision-speed.png"
                    alt="our-vison"
                    className="speed"
                  />
                  <img
                    src="images/vision-management.png"
                    alt="our-vison"
                    className="management-img"
                  />
                </div>
                <div className="fast__speed">
                  <p className="lightening">Lightening fast speeds</p>
                  <p className="management">Easy management</p>
                </div>
              </ImgWrap2>
            </Column4>
          </InfoRow2>
        </InfoWrapper2>
      </InfoContainer2>

      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <h2 className="our__mission">Our Mission</h2>
                <p className="mission">
                  To provide secure, convenience and fast digital payment
                  services to every business in Africa.
                </p>
                <div className="mission-img">
                  <img
                    src="images/mission-secure.png"
                    alt="secure"
                    className="spee"
                  />
                  <img
                    src="images/mission-centric.png"
                    alt="centric"
                    className="management-img"
                  />
                </div>
                <div className="secure-section">
                  <p className="lightenin">Secure</p>
                  <p className="business">Business centric</p>
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <img
                  src="images/mission.png"
                  alt="our-mission"
                  width="95%"
                  height="auto"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <div className="about-top">
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

export default About;
