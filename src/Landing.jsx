import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
const Home = props => (
  <Container fluid>
    <Container>
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
    </Container>
  </Container>
);
export default Home;
