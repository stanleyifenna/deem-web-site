import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EmailPage.css";
import firebaseConfig from "./firebase";


function EmailPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefaualt();

    firebaseConfig.collection("contacts")
      .add({
        name: name,
        email: email,
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
  };

  return (
    <div className="page-home">
      <div className="form-wrapper">
        <img
          src={"../../images/deempay-logo.svg"}
          alt="logo"
          className="email-logo"
        />

        <div className="rop">
          <h3 className="this-service">
            This Services will soon be available. Please provide us your details
            so that we can inform you once it is ready.
          </h3>
        </div>

        <div className="">
          <div className="rap">
            <h3 className="coming">Coming Soon</h3>
            <form onSubmit={handleSubmit}>
              <label className="name-details">Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="name-details">Email / Phone</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Link to="/Thanks">
                <input type="submit" value="Submit" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPage;
