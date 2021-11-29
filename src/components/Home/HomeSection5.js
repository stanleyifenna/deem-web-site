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
} from "./HomeSection5Elements";
import "./HomeSection5.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function HomeSection5({
  headline,
  description,
  description2,
  headline2,
  buttonLabel,
  merchant,
  webApp,
  img1,
  img2,
  img3,
  img4,
  img11,
  alt11,
  alt1,
  alt2,
  alt3,
  alt4,
}) {
  return (
    <div>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  <h1 className="clear-pricing">{headline}</h1>
                </TopLine>
                <Heading>
                  <p className="clear-transactions">{description}</p>
                </Heading>
                <Subtitle>
                  <Link to="/Pricing" style={linkStyle}>
                    <button className="black--btn">
                      <span className="learn-more">{buttonLabel}</span>
                    </button>
                  </Link>
                  <div className="left-side">
                    <div className="first-left">
                      <h4 className="webApp">{webApp}</h4>
                      <img src={img11} alt={alt11} className="free-img" />
                    </div>
                    <div className="first-left p-below">
                      <h4 className="webApp">{merchant}</h4>
                      <img src={img11} alt={alt11} className="free-img1" />
                    </div>
                  </div>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <TopLine>
                  <h1 className="clear-pricing2">{headline2}</h1>
                </TopLine>
                <Heading>
                  <p className="clear-transactions2">{description2}</p>
                </Heading>
                <Subtitle>
                  <div className="right-side">
                    <img src={img1} alt={alt1} className="payment-points1" />
                    <img src={img2} alt={alt2} className="payment-points2" />
                  </div>
                  <div className="right-side">
                    <img src={img3} alt={alt3} className="payment-points3" />
                    <img src={img4} alt={alt4} className="payment-points4" />
                  </div>
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
}

export default HomeSection5;
