import React from "react";
import "./HomeSection8.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";



const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

function HomeSection8() {
  return (
    <div className="btn-section">
      <Container>
  <Card className="big-btn" >
        
          <div className="row">
            <div className="column">
              <h2 className="start-message">Start accepting payments in 3 minutes</h2>

              <div className="app--download">
                <div className="download-last">
                <Link target="_blank" to="/EmailPage" style={linkStyle}  >
                    <button className="clear-btn2">
                      <span className="learn-more2">Create free account</span>
                    </button>
                  </Link>
                </div>
                <div className="download-last">
                <Link target="_blank" to="/EmailPage" style={linkStyle}>
                  
                    <button className="clear-btn1">
                      <img src="images/google-play.svg" alt="android" />
                      <span className="learn-more1">Get on Android</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="column">
              <img src="images/Appss.png" alt="apps" className="apps-img" />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default HomeSection8;




