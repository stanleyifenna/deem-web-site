import React from "react";
import "./EmailPage.css";
import { Link } from "react-router-dom";


function Thanks() {
  return (
    <div className="thanks-home">
      <>
        <img
          src={"../../images/deempay-logo.svg"}
          alt="logo"
          className="email-logo2"
        />

        <div className="thanks-wrap">
          <img
            src="images/thanks.svg"
            alt="thank you"
            className="thanks-img"
           
          />
          <h3 className="thank-you">Thank you</h3>
          <h3 className="is-ready">
            Your details is submitted succeful. We will notify you once it is
            ready.{" "}
          </h3>

          <form>
            <Link to="/">
              <input type="submit" value="Homepage" />
            </Link>
          </form>
        </div>
      </>
    </div>
  );
}

export default Thanks;
