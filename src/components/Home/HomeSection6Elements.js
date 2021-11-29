import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #fcfcfc;
  color: #000000;
  padding-top: 1px;
  @media screen and (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;
  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 556px;
  padding-top: 70px;
  margin-left: auto;
  margin-right: -100px;
  padding-bottom: 60px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin: auto;
    padding-bottom: 0px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 100px;
    margin: auto;
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #1a71ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  font-style: regular;
  margin-bottom: 40px;
  max-width: 450px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 585px;
  padding-top: 20px;
  height: 100%;
  @media screen and (max-width: 768px) {
    align-item: center;
    padding-top: 0px;
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    align-item: center;
    margin: auto;
    padding-top: 0px;
  }
`;
