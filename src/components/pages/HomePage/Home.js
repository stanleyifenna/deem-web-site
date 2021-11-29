import React, { useEffect } from "react";
import HomeSection from "../../Home/HomeSection";
import HomeSection2 from "../../Home/HomeSection2";
import HomeSection3 from "../../Home/HomeSection3";
import HomeSection4 from "../../Home/HomeSection4";
import HomeSection5 from "../../Home/HomeSection5";
import HomeSection6 from "../../Home/HomeSection6";
import HomeSection7 from "../../Home/HomeSection7";
import HomeSection8 from "../../Home/HomeSection8";

import {
  homeOne,
  homeTwo,
  homeThree,
  homeFour,
  homeFive,
  homeSix,
  homeSeven,
  homeEight,
} from "./Data";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";

const style = {
  height: 40,
  width: 40,
  lineHeight: "45px",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  color: "#1A71FF",
  textAlign: "center",
  justifyContent: "center",
  fontSize: 20,
  border: "0.5px solid #1A71FF",
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeSection {...homeOne} />
      <HomeSection2 {...homeTwo} />
      <HomeSection3 {...homeThree} />
      <HomeSection4 {...homeFour} />
      <HomeSection5 {...homeFive} />
      <HomeSection6 {...homeSix} />
      <HomeSection7 {...homeSeven} />
      <HomeSection8 {...homeEight} />

      <BackTop>
        <div style={style}>
          <div>{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </>
  );
}

export default Home;
