import React from "react";
import { Link } from "react-router-dom";
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
} from "./HomeSectionElements";
import "./HomeSection.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function HomeSection({ headline, description, img, alt }) {
  return (
    <div>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine></TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>
                  <div className="descrp"> {description} </div>
                </Subtitle>
                <BtnWrap>
                  <Link
                    target="_blank"
                    to="/EmailPage"
                    style={linkStyle}
                    className="btn-link"
                  >
                    <button className="btn--blue">
                      <span className="white-colour">Create free account</span>
                    </button>
                  </Link>

                  <Link
                    target="_blank"
                    to="/EmailPage"
                    style={linkStyle}
                    className="btn-link"
                  >
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
                <Img src={img} alt={alt} className="web" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
}

export default HomeSection;
