import React from "react";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import MyProjects from "../components/MyPortfolioComponents/MyProjects";
const MyPortfolio = props => (
  <ContentWrapper background="bg-dark text-white">
    <Header title="My Portfolio" />
    <MyProjects />
  </ContentWrapper>
);
export default MyPortfolio;
