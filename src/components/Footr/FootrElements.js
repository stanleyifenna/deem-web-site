
import styled from 'styled-components';

 
export const FooterContainer =styled.footer`
  background-color: #FAFAFA;
  padding: 40px 0;
  width: 100%;
`

export const FooterWrap =styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;     
`

export const FooterLinksContainer =styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
      padding-top: 32px   

  }  
`
