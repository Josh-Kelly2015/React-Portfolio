import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
const ContentWrapper = props => (
  <Container>
    <Jumbotron className="shadow-lg">{props.children}</Jumbotron>
  </Container>
);
export default ContentWrapper;
