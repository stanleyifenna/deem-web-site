import React from "react";
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
  Img,
} from "./HomeSection2Elements";
import "./HomeSection2.css";
function HomeSection2({ topLine, headline, description, img, alt }) {
  return (
    <div>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  <img src="images/cirle.svg" alt="circle" className="circle" />{" "}
                  {topLine}
                </TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
}

export default HomeSection2;
