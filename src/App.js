import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./Landing";
import Bio from "./Bio";
import MyPortfolio from "./MyPortfolio";
import ContactMe from "./ContactMe";
import NoMatch from "./NoMatch";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <Container fluid>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/self-bio" component={Bio} />
          <Route exact path="/my-portfolio" component={MyPortfolio} />
          <Route exact path="/contact-me" component={ContactMe} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
