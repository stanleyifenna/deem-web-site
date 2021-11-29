import React from "react";
import "./HomeSection10.css";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeSection10() {
  return (
    <div className="btn-section">
      <Container>
        <Card className="big-btn">
          <div className="row">
            <div className="column">
              <h2 className="dash-board">DeemPay Merchant Dashboard</h2>
                <p className="see-all">See all transactions in one place</p>
                <div className="Ourweb-App">
                <p className="plat-forms">
                    Our WebApp enable the merchant to manage and grow their business all
                    in one platform.
                    </p>
                  
                </div>
                
              
            </div>

            <div className="column">
              <img src="images/dashboard.svg" alt="apps" className="dash-img" />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default HomeSection10;
