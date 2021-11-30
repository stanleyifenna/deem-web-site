
import styled from 'styled-components';

 
export const FooterContainer =styled.footer`
  background-color: #FAFAFA;
  padding: 20px 0;
  width: 100%;
`

export const FooterWrap = styled.div`
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;



export const FooterLinksContainer = styled.div`
   width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
 
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;


export const FooterLinksWrapper2 = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 17px;
  color: #000;
`;

export const FooterLink = styled.li`
  font-size: 16px;
  line-height: 23.5px;
  text-decoration: none;
  font-style: regular;
  font-weight: 400;
  color: #565656; 
  display: block;
  margin-bottom: 0.5rem;


  &:hover {
    color: #1a71ff;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinks = styled.li`
  font-size: 16px;
  line-height: 23.5px;
  text-decoration: none;
  font-style: regular;
  font-weight: 400;
  color: #565656; 
  display: block;
  margin-bottom: 0.5rem;


`;