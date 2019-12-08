import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import MyProjects from "../components/MyPortfolioComponents/MyProjects";
const MyPortfolio = props => (
  <Container fluid className="bg-dark text-white">
    <ContentWrapper>
      <Header title="My Portfolio" />
      <MyProjects />
    </ContentWrapper>
  </Container>
);
export default MyPortfolio;
