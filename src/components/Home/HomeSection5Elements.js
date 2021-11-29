import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #ffffff;
  color: #000000;
  padding-top: 80rem;
  padding-bottom: 5rem;

  @media screen and (max-width: 1000px) {
    padding-top: 65.8rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 125.8rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: -5rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: -5rem;
  }

  @media screen and (max-width: 490px) {
    margin-top: -9rem;
    
  }


  @media screen and (max-width: 480px) {
    margin-top: 11rem;
    
  }

  @media screen and (max-width: 450px) {
    margin-top: 5rem;
    
  }


  
  @media screen and (max-width: 430px) {
    margin-top: 3rem;
    
  }


  @media screen and (max-width: 420px) {
    padding-top: 125rem;
    padding-bottom: 2.5rem;
  }
`;

export const InfoWrapper = styled.div`
 z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 45px;
padding-left: 45px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
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
  max-width: 480px;
  margin-left: auto;
  margin-right: 23px;
  padding-bottom: 0px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin: auto;
    padding-bottom: 0px;
  }

  @media screen and (max-width: 500px) {
    margin-top: -3rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: -33rem;
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
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 40px;
  max-width: 450px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  padding-top: 0px;
  height: 100%;
  @media screen and (max-width: 768px) {
    align-item: center;
    padding-top: 0px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    margin-top: -7.8rem;
  }
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-left: 0px;
  @media screen and (max-width: 768px) {
    align-item: center;
    margin: auto;
    padding-top: 0px;
    padding: auto;
    width: 100%;
  }
`;
