import React, { useEffect } from "react";
import './Pricing.css';
import { FaAngleUp } from 'react-icons/fa';
import { BackTop } from 'antd';
import { Card, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  height: 40,
  width: 40,
  lineHeight: '45px',
  borderRadius: 4,
  backgroundColor: '#ffffff',
  color: '#1A71FF',
  textAlign: 'center',
  fontSize: 20,
  border: '0.5px solid #1A71FF',
};


function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <div className='princing-top'>
            <h4 className='no-hidden-charges'>No hidden charges</h4>
            <h2 className='low-cost'>Low cost pricing for all</h2>
            <h2 className='businesses'>businesses</h2>
        </div>
        <div className="pricing-bottom">
        <Card className="card" style={{ width: "60rem" }}>
          <span className="Price-model">Pricing model</span>
          <Dropdown.Divider />
          <br />
          <div className="first-row">
            <Card className="first-card" style={{ width: "50rem" }}>
              <span className="Below-price">Below NGN 250</span>
              <span className="first-amount">NGN 0.50k</span>
            </Card>
          </div>
          <div className="first-row">
            <Card className="second-card" style={{ width: "50rem" }}>
              <span className="Below-price">NGN 250 - 999.99</span>
              <span className="first-amount">NGN 1.00k</span>
            </Card>
          </div>
          <div className="first-row">
            <Card className="first-card" style={{ width: "50rem" }}>
              <span className="Below-price">NGN 1,000 - 4,999.99</span>
              <span className="first-amount">NGN 5.00k</span>
            </Card>
          </div>
          <div className="first-row">
            <Card className="second-card" style={{ width: "50rem" }}>
              <span className="Below-price">NGN 5000 and above</span>
              <span className="first-amount">NGN 25.00k</span>
            </Card>
          </div>
          <br />
          <br />
        </Card>
      </div>
      <br />
      <br />
      <br />
     <BackTop>
      <div style={style}>
      <div className=''>{<FaAngleUp />}</div> 
      </div>
    </BackTop>
    </div>
  )
}

export default Pricing
