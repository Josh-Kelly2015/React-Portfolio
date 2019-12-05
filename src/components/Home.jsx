import React from "react";
const Home = props => (
  <section className="text-white" id="home">
    <div className="row">
      <div className="col">
        <h1>Joshua Kelly</h1>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
    <div className="row justify-content-around">
      <a
        className="btn btn-primary btn-lg mr-2"
        href="https://github.com/Josh-Kelly2015"
        role="button"
      >
        Github
      </a>
      <a
        className="btn btn-primary btn-lg ml-2"
        href="https://www.linkedin.com/in/joshua-kelly-482196185/"
        role="button"
      >
        LinkedIn
      </a>
    </div>
  </section>
);
export default Home;
