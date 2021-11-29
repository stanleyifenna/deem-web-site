import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import {
  Nav,
  NavBar,
  NavMenu,
  NavBtn,
  NavButton,
  NavLogo,
  MobileIcon,
  NavbarContainer,
  NavItem,
} from "./NavbarElements";

const linksStyle = {
  textDecoration: "none",
};

const solutions = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/solutions.svg" alt="cardreader" className="pad-img1" />
    </div>
    <Menu.Item className="mo">
      <Link to="/Solutions" className="pad3" style={linksStyle}>
        <span className="">DeemPay App</span>
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line2"></hr>
    <Menu.Item className="mo4">
      <Link to="/Solutions" className="pad3" style={linksStyle}>
        DeemPay Dashboard
      </Link>
    </Menu.Item>
  </Menu>
);

const help = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/help.svg" alt="cardreader" className="pad-img1" />
    </div>
    <Menu.Item className="mo">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCR_nKmQ37Yp49aqyyItxW6A"
        rel="noreferrer"
        className="pad"
        style={linksStyle}
      >
        Video Tutorial
      </a>
    </Menu.Item>
    <hr className="dropdown-horizontal-line2"></hr>
    <Menu.Item className="mo2">
      <Link to="/Faq" className="pad" style={linksStyle}>
        FAQ
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line"></hr>
    <Menu.Item className="mo3">
      <Link to="/SupportCenter" className="pad" style={linksStyle}>
        Support Center
      </Link>
    </Menu.Item>
  </Menu>
);

const company = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/company.svg" alt="cardreader" className="pad-img1" />
    </div>

    <Menu.Item className="mo">
      <Link to="/About" className="pad2" style={linksStyle}>
        About
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line2"></hr>
    <Menu.Item className="mo4">
      <Link to="/Careers" className="pad2" style={linksStyle}>
        {" "}
        Careers{" "}
      </Link>
    </Menu.Item>
  </Menu>
);

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const Navbar = ({ toggle }) => {
  const [navbr, setNavbr] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 84) {
      setNavbr(true);
    } else {
      setNavbr(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Nav className={navbr ? "navbr active" : "navbr"}>
        <NavbarContainer>
          <NavLogo>
            <Link to="/">
              <img src={"../../images/deempay-logo.svg"} alt="logo" />
            </Link>
          </NavLogo>

          <MobileIcon onClick={toggle}>
            {<img src="images/open.svg" alt="icon" />}
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavBar>
                <Dropdown overlay={solutions}>
                  <div className="ant-dropdown-link nav-links">
                    Solutions{" "}
                    <span className="drop-down">
                      {<img src="images/drop.svg" alt="icon" />}
                    </span>
                  </div>
                </Dropdown>
              </NavBar>
            </NavItem>
            <NavItem>
              <NavBar className="first">
                <Link to="/Pricing" style={linkStyle}>
                  Pricing
                </Link>
              </NavBar>
            </NavItem>
            <NavItem>
              <NavBar>
                <Dropdown overlay={help}>
                  <div className="ant-dropdown-link nav-links">
                    Help{" "}
                    <span className="drop-down">
                      {<img src="images/drop.svg" alt="icon" />}
                    </span>
                  </div>
                </Dropdown>
              </NavBar>
            </NavItem>
            <NavItem>
              <NavBar className="forth">
                <Dropdown overlay={company}>
                  <div className="ant-dropdown-link nav-links">
                    Company{" "}
                    <span className="drop-down">
                      {<img src="images/drop.svg" alt="icon" />}
                    </span>
                  </div>
                </Dropdown>
              </NavBar>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link to="/EmailPage" target="_blank" className="fifth">
              Log In
            </Link>
            <NavButton>
              <Link to="/EmailPage" target="_blank" className="sixth">
                Get Started
              </Link>
            </NavButton>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
