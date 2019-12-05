import React from "react";
import NavBar from "./NavBar";
import Bio from "./Bio";
import MyPortfolio from "./MyPortfolio";
import ContactMe from "./ContactMe";
import Home from "./Home";
const LandingPage = props => (
  <>
    <NavBar />
    <Home />
    <Bio />
    <MyPortfolio />
    <ContactMe />
  </>
);
export default LandingPage;
