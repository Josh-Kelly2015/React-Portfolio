import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import SkillsList from "../components/BioComponents/SkillsList";
import GoalsList from "../components/BioComponents/GoalsList";
import AutoBiography from "../components/BioComponents/AutoBiography";
import MyGreatFace from "../components/BioComponents/MyGreatFace";
const AboutMe = props => (
  <Container fluid>
    <ContentWrapper>
      <Header title="About Me" />

      <Row>
        <Col lg="4">
          <MyGreatFace />
        </Col>

        <Col lg="8">
          <AutoBiography />
        </Col>
      </Row>

      <Row>
        <Col>
          <Header title="Skills" />

          <SkillsList />
        </Col>

        <Col>
          <Header title="Goals" />

          <GoalsList />
        </Col>
      </Row>
    </ContentWrapper>
  </Container>
);
export default AboutMe;
