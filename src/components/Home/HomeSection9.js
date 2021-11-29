import React from "react";
import "./HomeSection9.css";
import {Link} from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

function HomeSection9() {
  return (
    <div className="btn-section9">
      <Container>
        <Card className="big-btn card-size">
          <div className="row">
            <div className="column">
            <h2 className="more-questions">More Questions?</h2>
            <p className="contact-us">Contact us directly</p>
              
              <div className="mail--download">
                
                  <Link target="_blank" to="/EmailPage" style={linkStyle} >
                    <button className="mail-btn">
                      <span className="mail-us">Mail Us</span>
                    </button>
                  </Link>
                
              </div>
            </div>

            <div className="column">
            <img src="images/faq.png" alt="alt" className="app-img" />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default HomeSection9;
