import React, { useState, useEffect } from "react";
import "./Faq.css";
import { Data } from "./Data.js";
import { BackTop } from "antd";
import { FaAngleUp } from "react-icons/fa";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import styled from "styled-components";
import { IconContext } from "react-icons";
import HomeSection9 from "../../Home/HomeSection9";
import { homeNine } from "../HomePage/Data";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  padding-top: 40px;
  padding-bottom: 0px;
  margin-bottom: -8rem;

  @media (max-width: 768px) {
    padding: 10 25px;
    padding-top: 4px;
  }

  @media (max-width: 480px) {
    margin-bottom: -15rem;
  }
`;

const Wrap = styled.div`
  background: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  h1 {
    padding: 0.5rem;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 29.38px;
    color: #0d0d0d;
    align-items: center;
  }
  span {
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
      line-height: 24.38px;
      text-align: left;
      color: #0d0d0d;
    }
  }
`;

const Dropdown = styled.div`
  background: #f8fafb;
  color: #0d0d0d;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  border-bottom: 1px solid #ffeff;
  border-top: 1px solid #ffeff;
  p {
    font-size: 16px;
    line-height: 23.5px;
    padding-top: 10px;
    font-weight: 400;
    color: #000000;
  }

  @media (max-width: 768px) {
    padding: 20px 25px;
    width: 100%;
    height: 130px;

    p {
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: 400;
      color: #000000;
    }
  }

  @media (max-width: 480px) {
    height: 170px;

    p {
      padding-top: 20px;
      font-size: 15px;
      line-height: 23.56px;
      font-weight: 400;
      color: #000000;
    }
  }
`;

const style = {
  height: 40,
  width: 40,
  lineHeight: "45px",
  backgroundColor: "#ffffff",
  color: "#1A71FF",
  textAlign: "center",
  fontSize: 20,
  border: "0.5px solid #1A71FF",
};

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div>
      <div className="faq-home">
        <div>
          <div className="faq-top">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <Card className="ecllipse-shape"></Card>
          </div>
        </div>
      </div>

      <IconContext.Provider value={{ color: "#200e32", size: "14px" }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>
                      {clicked === index ? <FiMinusSquare /> : <FiPlusSquare />}
                    </span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>

      <div className="faq-top">
        <HomeSection9 {...homeNine} />
      </div>

      <BackTop>
        <div style={style}>
          <div className="">{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </div>
  );
}

export default Faq;
