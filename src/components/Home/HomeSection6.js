import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
} from "./HomeSection6Elements";
import "./HomeSection6.css";
function HomeSection6({
  subHead,
  headline,
  description,
  img,
  alt,
  description2,
}) {
  return (
    <div>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <img src={img} alt={alt} className="lock-img" width="60%"
              height="auto" />
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <h5 className="maximum-security">{headline}</h5>

                <p className="security">{description}</p>

                <div className="sub-head">
                  {subHead}
                  <p className="encryption">{description2}</p>{" "}
                </div>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
}

export default HomeSection6;
