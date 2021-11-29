import React from "react";
import { InfoContainer, InfoWrapper } from "./HomeSection7Elements";
import "./HomeSection7.css";

function HomeSection7({
  headline2,
  pethah,
  gtBank,
  paythru,
  genesys,
  tence,
  headline,
  alt,
  alt2,
  alt3,
  alt4,
  alt5,
}) {
  return (
    <div>
      <InfoContainer>
        <h5 className="our-partners">{headline}</h5>
        <h5 className="our-value">{headline2}</h5>
        <InfoWrapper>
          <img src={gtBank} alt={alt3} className="partners1" />
          <img src={paythru} alt={alt2} className="partners2" />
          <img src={genesys} alt={alt} className="partners3" />
          <img src={pethah} alt={alt5} className="partners4" />
          <img src={tence} alt={alt4} className="partners5" />
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
}

export default HomeSection7;
