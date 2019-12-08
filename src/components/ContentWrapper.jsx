import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
const ContentWrapper = ({ background, children }) => (
  <Container fluid className={background}>
    <Container>
      <Jumbotron className="shadow-lg">{children}</Jumbotron>
    </Container>
  </Container>
);
export default ContentWrapper;
