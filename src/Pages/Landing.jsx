import React from "react";
import { Row, Button } from "react-bootstrap";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
const Home = props => (
  <ContentWrapper>
    <Header title="Joshua Kelly" />

    <Row className="justify-content-center">
      <p>Full Stack Web Developer</p>
    </Row>

    <Row className="justify-content-around">
      <Button size="lg" href="https://github.com/Josh-Kelly2015">
        Github
      </Button>
      <Button
        size="lg"
        href="https://www.linkedin.com/in/joshua-kelly-482196185/"
      >
        LinkedIn
      </Button>
    </Row>
  </ContentWrapper>
);
export default Home;
