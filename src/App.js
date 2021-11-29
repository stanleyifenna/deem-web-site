import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import Routes from "./Routes.js";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

import EmailPage from "./components/pages/Others/EmailPage";
import Thanks from "./components/pages/Others/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact component={Routes} />

        <Route path="/EmailPage" exact component={EmailPage} />
        <Route path="/Thanks" exact component={Thanks} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
