import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ContactForm from "../components/ContactMeComponents/ContactForm";
const ContactMe = props => (
  <ContentWrapper>
    <Header title="Contact Me" />

    <ContactForm />
  </ContentWrapper>
);
export default ContactMe;
