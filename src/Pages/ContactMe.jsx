import React from "react";
import Container from "react-bootstrap/Container";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ContactForm from "../components/ContactMeComponents/ContactForm";
const ContactMe = props => (
  <Container fluid>
    <ContentWrapper>
      <Header title="Contact Me" />

      <ContactForm />
    </ContentWrapper>
  </Container>
);
export default ContactMe;
