import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const GoalsList = props => (
  <ListGroup>
    <Card.Header> Experiment with CSS animations</Card.Header>
    <Card.Header>Develop deeper JavaScript skills</Card.Header>
    <Card.Header>Always learn, Always Grow</Card.Header>
    <Card.Header>Attend Local Networking Events</Card.Header>
    <Card.Header>Study Angular, Vue, Python, C#</Card.Header>
  </ListGroup>
);
export default GoalsList;
