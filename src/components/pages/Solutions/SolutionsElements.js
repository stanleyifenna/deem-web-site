import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #000000;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    padding: 10px 0px;

  }

`;

export const InfoWrapper = styled.div`
  display: grid;
  max-with: 1228px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;
  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
  
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 150px) {
    padding: 0 15px;
  }
      
`;


export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col2; 
  
`;

export const TextWrapper = styled.div`
  max-width: 557px;
  padding-top: 140px;
  margin-left: auto;
  margin-right: 43px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
  max-width: 100vw;
  margin-right: 0px;

      }
`;

export const TopLine = styled.p`
color: #00112c;
  
  font-size: 16px;
  line-height: 24px;
  font-style: regular;
  margin-bottom: 16px;  
  
  @media screen and (max-width: 480px) {
    padding-top: 3rem;
  }
`;

export const Heading = styled.h1`
  color: #000000;
  font-size: 49.8px;
  font-weight: bold;
  line-height: 56px;
  max-width: 580px
  margin-right: 0px;
  margin-bottom: 16px; 
  @media screen and (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
  } 
 
`;

export const Subtitle = styled.p`
color: #000000;
font-size: 16px;
line-height: 26px;
font-weight: medium;
  margin-bottom: 40px; 
  max-width: 540px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  } 
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center; 
    justify-content: center;
    justify-content: flex-start;
  } 
 `;

 export const ImgWrap = styled.div`
  max-width: 500px;
  padding-top: 100px;
  margin-left: 97px;
  height: 100%;
  @media screen and (max-width: 768px) {
    align-item: center;
    padding-top: 30px;
    margin: auto;
  } 

  @media screen and (max-width: 480px) {
    padding-top: 35px;
  margin-left: 0px;

  } 
 
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0px 0;
  padding-right: 0;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    align-item: center;
      margin: auto;
      padding-top: 0px;
  } 
`;

