import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./Sidebar.css";
import {
  SidebarContainer,
  Icon,
  SideButton,
  SidebarBtnWrap,
  SidebarMenu,
  SidebarBar,
  SidebarWrapper,
  SidebarLogo,
} from "./SidebarElement";

const linksStyle = {
  textDecoration: "none",
};




const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

const Sidebar = ({ isOpen, toggle}) => {

  const solutions = (
    <Menu className="bar-menu">
      <div className="img-dropdown">
        <img src="images/solutions.svg" alt="cardreader" className="pad-img1" />
      </div>
      <Menu.Item className="mo">
        <Link to="/Solutions" className="pad3" onClick={toggle} style={linksStyle} >
          DeemPay App
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line2"></hr>
      <Menu.Item className="mo4">
        <Link to="/Solutions" className="pad3" onClick={toggle} style={linksStyle} >
          DeemPay Dashboard
        </Link>
      </Menu.Item>
    </Menu>
  );

  const help = (
    <Menu className="bar1-menu">
      <div className="img-dropdown">
        <img src="images/help.svg" alt="cardreader" className="pad-img1" />
      </div>
      <Menu.Item className="mo">
        <Link to="/Faq" className="pad" onClick={toggle} style={linksStyle} >
          FAQ
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line"></hr>
      <Menu.Item className="mo3">
        <Link to="/SupportCenter" className="pad" onClick={toggle} style={linksStyle} >
          Support Center
        </Link>
      </Menu.Item>
    </Menu>
  );
  
  const company = (
    <Menu className="bar-menu">
      <div className="img-dropdown">
        <img src="images/company.svg" alt="cardreader" className="pad-img1" />
      </div>
  
      <Menu.Item className="mo">
        <Link to="/About" className="pad2" onClick={toggle} style={linksStyle} >
          About
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line2"></hr>
      <Menu.Item className="mo4">
        <Link to="/Careers" className="pad2" onClick={toggle} style={linksStyle}>
          Careers
        </Link>
      </Menu.Item>
    </Menu>
  );
  

  return (
    <SidebarContainer isOpen={isOpen} >
      <SidebarLogo>
        <Link onClick={toggle} to="/" >
          <img src={"../../images/deempay-logo.svg"} alt="logo" />
        </Link>
      </SidebarLogo>
      <Icon onClick={toggle} >{<img src="images/close.svg" alt="icon" />}</Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarBar>
            <Dropdown overlay={solutions}>
              <div className="ant-dropdown-link nav-links">
                <span onClick={false}>Solutions</span>
                <span className="drop-down">
                  {<img src="images/drop.svg" alt="icon" />}
                </span>
              </div>
            </Dropdown>
          </SidebarBar>

          <SidebarBar>
            <Link to="/Pricing" onClick={toggle} style={linkStyle}>
              Pricing
            </Link>
          </SidebarBar>

          <SidebarBar>
            <Dropdown overlay={help}>
              <div className="ant-dropdown-link nav-links">
                Help{" "}
                <span className="drop-down">
                  {<img src="images/drop.svg" alt="icon" />}
                </span>
              </div>
            </Dropdown>
          </SidebarBar>

          <SidebarBar >
            <Dropdown overlay={company}>
              <div className="ant-dropdown-link nav-links">
                Company{" "}
                <span className="drop-down">
                  {<img src="images/drop.svg" alt="icon" />}
                </span>
              </div>
            </Dropdown>
          </SidebarBar>

          <SidebarBar>
            <Link target="_blank" to="/EmailPage" onClick={toggle} style={linkStyle}>
              Log in
            </Link>
          </SidebarBar>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SideButton>
            <Link
              target="_blank"
              to="/EmailPage"
              onClick={toggle}
              className="white--white"
              style={linksStyle}
            >
              {" "}
              Get started
            </Link>
          </SideButton>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
