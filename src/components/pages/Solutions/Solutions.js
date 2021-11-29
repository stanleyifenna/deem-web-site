import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";
import HomeSection10 from "../../Home/HomeSection10";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from "./SolutionsElements";
import "./Solutions.css";

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

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <InfoContainer className="solu-tion">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  <img src="images/star.svg"  alt="star" className="star" />Ease your payment concerns{" "}
                </TopLine>
                <Heading> 
                <span className="deempay__merchant">Deempay Merchant App</span>
              </Heading>
                <Subtitle>
                <p className="lower-cost">
                  We bring mobile point-of-sale acceptance to every businesses
                  of all size at a secure and lower cost
                </p>
                </Subtitle>
                <BtnWrap>
                  <Link target="_blank" to="/EmailPage" style={linkStyle} >
                    <button className="btn--blue">
                      <span className="white-colour">Create free account</span>
                    </button>
                  </Link>
                  <Link target="_blank" to="/EmailPage" style={linkStyle} >
                    <button className="btn--black">
                      <img
                        src="images/google-play.svg"
                        alt="App"
                        className="app-imgs"
                      />{" "}
                      <span className="black-colour">Get on Android </span>
                    </button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src="images/solution-app.svg"
                  alt="Merchant App"
                  className="web"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <div className="solution-top">
        <HomeSection10 />
      </div> 

      <BackTop>
        <div style={style}>
          <div>{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </div>
  );
}

export default Solutions;


