import React from "react";
import { Link } from "react-router-dom";
import "./Footr.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinks,
} from "./FootrElements";

const linkStyle = {
  textDecoration: "none",
};

function Footr() {
  return (
    <FooterContainer>
      
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <Link to="/">
                  <img
                    src={"../../images/deempay-logo.svg"}
                    alt="logo"
                    className=""
                  />
                </Link>
              </FooterLinkTitle>

              <FooterLinks>294 Herbert Macaulay</FooterLinks>
              <FooterLinks>Way, Yaba 101212</FooterLinks>
              <FooterLinks>Lagos, Nigeria</FooterLinks>
              <br />
              <FooterLinks>hello@deempay.com</FooterLinks>
              <FooterLinks>+2348134902354</FooterLinks>
            </FooterLinkItems>
               
            <FooterLinkItems>
              <FooterLinkTitle>Our solutions</FooterLinkTitle>

              <Link to="/Solutions" style={linkStyle}>
                <FooterLink>DeemPay App</FooterLink>
              </Link>
              <Link to="/Solutions" style={linkStyle}>
                <FooterLink>DeemPay Dashboard</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>

              <Link to="/About" style={linkStyle}>
                <FooterLink>About</FooterLink>
              </Link>
              <Link to="/Careers" style={linkStyle}>
                <FooterLink>Careers</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
          <FooterLinkItems>

            <FooterLinkTitle>Help</FooterLinkTitle>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCR_nKmQ37Yp49aqyyItxW6A"
              style={linkStyle}
            >
              <FooterLink>Video Tutorial</FooterLink>
            </a>

            <Link to="/Faq" style={linkStyle}>
              <FooterLink>FAQ</FooterLink>
            </Link>
            <Link to="/SupportCenter" style={linkStyle}>
              <FooterLink>Support Center</FooterLink>
            </Link>
            </FooterLinkItems>


            <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>

              <Link to="/Privacy" style={linkStyle}>
                <FooterLink>Privacy Policy</FooterLink>
              </Link>
              <Link to="/TermsofService" style={linkStyle}>
                <FooterLink>Terms of Service</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterWrap>
        <hr className="footr-line" />

        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">
              © Copyright 2021 DeemPay. All Rights Reserved
            </small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to={
                  "//www.linkedin.com/company/deempay/about/?viewAsMember=true"
                }
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="social-icon-link"
                to={"//www.youtube.com/watch?v=-L1r1xVGYSE"}
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to={"//www.youtube.com/watch?v=-L1r1xVGYSE"}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to={"//www.facebook.com/DeemPay-120820392659915/"}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </section>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footr;
