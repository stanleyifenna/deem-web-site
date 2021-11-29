import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  background: #ffffff;
  height: 100%;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  display: grid;
  z-index: 999;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SidebarLogo = styled(LinkR)`
  justify-self: flex-start;
  position: absolute;
  top: 1.5rem;
  left: 1rem;
`;

export const Icon = styled.div`
    background: transparent;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    outline: none;
    font-weight: medium;
    font-size: 1.5rem;
    cursor: pointer;
  

  @media screen and (max-width: 480px) {
    background: transparent;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    outline: none;
    font-weignt: medium;
    font-size: 1.5rem;
    cursor: pointer;
 
   }

  @media screen and (max-width: 360px) {
    backgroung: transparent;
    position: absolute;
    top: 1.5rem;
    right: 3rem;
    outline: none;
    font-weignt: medium;
    font-size: 1.5rem;
    cursor: pointer;
 
   }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: -5rem;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (5, 40px);
  text-align: center;

  }
  @media screen and (max-width: 360px) {
   grid-template-rows: repeat (5, 40px);
  text-align: center;

  } 
`;

export const SidebarBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 18px;
  font-weight: 24px;
  font-weight: 500;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0d0d0d;
    text-decoration: none;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideButton = styled.button`
  border-radius: 8px;
  background: #1a71ff;
  white-space: nowrap;
  font-weight: 24px;
  height: 48px;
  width: 100%;
   text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 120px;
  font-weight: 450;
  padding: 10px 0px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f76d1;
    color: #ffffff;
    text-decoration: none;
  }
`;
