import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #ffffff;
  color: #000000;
  padding-top: 121px;
  @media screen and (max-width: 960px) {
    padding-left: 100px 0px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 60px;
    margin-bottom: -8rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 62px;
  padding-left: 24px;
  padding-right: 24px;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;
