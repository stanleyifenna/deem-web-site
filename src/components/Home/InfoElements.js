import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #ffffff;
  color: #000000;
  @media screen and (max-width: 960px) {
    padding-left: 100px 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  max-width: 1128px;
  margin-right: auto;
  margin-left: auto;
  height: 860px;
  padding: 0 24px;
  z-index: 1;
  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  @media screen and (max-width: 960px) {
    grid-template-areas: 'col1' 'col2';
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 1;
`;

export const TopLine = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;  
`;

export const Heading = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px; 
  @media screen and (max-width: 480px) {
    font-size: 32px;
  } 
`;

export const Subtitle = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px; 
  max-width: 440PX;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  } 
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
 `;

 export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;


