import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
const ContentWrapper = ({ width, children }) => (
  <Container className={width}>
    <Jumbotron className="shadow-lg">{children}</Jumbotron>
  </Container>
);
export default ContentWrapper;
