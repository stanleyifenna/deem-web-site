import React from 'react';
import {Link} from 'react-router-dom';
import './Footr.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import {FooterContainer  } from './FootrElements' 


  const linkStyle = {
    textDecoration: "none",

  };
  

 function Footr() {
     return (
         <FooterContainer>
            <div className="contt">
              <div className="row">
                <div className="footr-col">
                  
                  <Link to="/" >
                <img src={"../../images/deempay-logo.svg"} alt="logo" className="footr--logo" />
              </Link>
                  <ul>
                   <li>294 Herbert Macaulay</li>
                    <li>Way, Yaba 101212</li>
                    <li>Lagos, Nigeria</li>
                     <br />
                    <li>hello@deempay.com</li>
                    <li>+2348134902354</li>

                  </ul>
                </div>
                <div className="footr-col">
                  <h3 className="footr-top1">Our solutions</h3>
                  <ul>
                  <Link to="/Solutions"  style={linkStyle}>
                    <li className="footr--list">DeemPay App</li>
                    </Link>
                    <Link to="/Solutions"  style={linkStyle}>
                    <li>DeemPay Dashboard</li>
                    </Link>
                  </ul>
                </div>
                <div className="footr-col two">
                  <h3 className="footr-top2" >Company</h3>
                  <ul>
                  <Link to="/About"  style={linkStyle}>
                    <li className="footr--list">About</li>
                    </Link>
                    <Link to="/Careers"  style={linkStyle}>
                    <li>Careers</li>
                    </Link>
                  </ul>
                </div>
                <div className="footr-col three">
                  <h3 className="footr-top3">Help</h3>
                  <ul>
                  <a
                  target="_blank" rel="noreferrer"
                  href="https://www.youtube.com/channel/UCR_nKmQ37Yp49aqyyItxW6A"
                  style={linkStyle}
                >
                  <li className="footr--list">Video Tutorial</li>
                </a>
                    
                    <Link to="/Faq"  style={linkStyle}>
                    <li className="footr--list">FAQ</li>
                    </Link>
                    <Link to="/SupportCenter"  style={linkStyle}>
                    <li>Support Center</li>
                    </Link>
                  </ul>
                
                </div>
                <div className="footr-col four">
                  <h3  className="footr-top4">Legal</h3>
                  <ul>
                  <Link to="/Privacy"  style={linkStyle}>
                    <li className="footr--list">Privacy Policy</li>
                    </Link>
                    <Link to="/TermsofService"  style={linkStyle}>
                    <li>Terms of Service</li>
                    </Link>
                  </ul>
                </div>
              </div>    
            <hr className="footr-line" />
            
            <section className="social-media">
            <div className="social-media-wrap">
              <small className="website-rights">
                © Copyright 2021 DeemPay. All Rights Reserved
              </small>
              <div className="social-icons">
                <Link
                  className="social-icon-link"
                  to={"//www.linkedin.com/company/deempay/about/?viewAsMember=true"}
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
          </div>   
         </FooterContainer>
     )
 }
  
 export default Footr
 




