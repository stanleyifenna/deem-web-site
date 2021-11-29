import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  height: 84px;
  display: flex;
  position: sticky ;
  padding: 0.5rem calc((100vw - 1300px)/2);
  align-items: center;
  top: 0;
  margin-left:auto;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 480px) {
  position: sticky ;
  height: 84px;
    
  }
 
    
`;

export const NavbarContainer = styled.div`
  height: 84px;
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%; 
  padding: 0 24px;
  max-width: 1228px;
  z-index: 1;
 

`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-left: 0px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    position: absolute;
    top: 0;
    align-items: center;
  text-content: center;
  justify-content: center;

    transform: translate(-5%, 60%);
    cursor: pointer;
  }
  
`;


export const NavBar = styled.div`
  color: #000000 ;
  display: flex;
  align-items: center;
  font-family: Heebo;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-decoration: none;
  padding: 0 0rem;
  height: 100%;
  cursor: pointer;
  
  &:hover {

    color: #0d0d0d;
    text-decoration: none;
  }
  
`;

export const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    transition: all 0.2s ease-in-out;
    top: 0;
    margin-top: 3px;
    right: 0;
    font-weignt: 16px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavItem = styled.li`
  height: 84px;
  padding-right: 45px;

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-right: 84px;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 1900px) {
    position: absolute;
    padding-left: 12rem;
    transition: all 0.2s ease-in-out;
    padding-right: 0;

  }
  @media screen and (min-width: 1000px) {
    position: absolute;
    padding-left: 12rem;
    padding-right: 0;
    transition: all 0.2s ease-in-out;

  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
 
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }          
`;

export const NavButton = styled.button`
  border-radius: 8px;
  background: #1a71ff;
  display: flex;
  font-weight: 24px;
  height: 48px;
  font-size: 17px;
  width: 128px;
  font-weight: 500;
  line-height: 24px;
  padding: 10.5px 0px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f76d1;
    color: #ffffff;
    text-decoration: none;
  }
 
`;


 


