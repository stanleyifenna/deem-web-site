import React, { useState, Suspense, lazy } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footr from "./components/Footr/Footr";
import Home from "./components/pages/HomePage/Home";

import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
const About = lazy(() => import("./components/pages/About/About"));
const Privacy = lazy(() => import("./components/pages/PrivacyPolicy/Privacy"));
const Pricing = lazy(() => import("./components/pages/Pricing/Pricing"));
const TermsofService = lazy(() =>
  import("./components/pages/TermsofService/TermsofService")
);
const SupportCenter = lazy(() =>
  import("./components/pages/SupportCenter/SupportCenter")
);
const Careers = lazy(() => import("./components/pages/Careers/Careers"));
const Solutions = lazy(() => import("./components/pages/Solutions/Solutions"));
const Faq = lazy(() => import("./components/pages/Faq/Faq"));

function Routes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/Privacy" exact component={Privacy} />
            <Route path="/TermsofService" exact component={TermsofService} />
            <Route path="/About" exact component={About} />
            <Route path="/Careers" exact component={Careers} />
            <Route path="/Pricing" exact component={Pricing} />
            <Route path="/Solutions" exact component={Solutions} />
            <Route path="/Faq" exact component={Faq} />
            <Route path="/SupportCenter" exact component={SupportCenter} />
          </Suspense>
        </Switch>
        <Footr />
    </BrowserRouter>
  );
}

export default Routes;
