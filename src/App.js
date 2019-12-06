import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import MyPortfolio from "./components/MyPortfolio";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Bio />
      <MyPortfolio />
      <ContactMe />
    </div>
  );
}

export default App;
