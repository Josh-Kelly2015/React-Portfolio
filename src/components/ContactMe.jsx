import React from "react";
const ContactMe = props => (
  <section className="container-fluid bg-white" id="contactMe">
    <div className="container">
      <div className="row justify-content-center mb-4 border-bottom ">
        <h1>Contact Me</h1>
      </div>
      <div className="jumbotron shadow-lg p-3">
        <form className="needs-validation " novalidate>
          <div className="form-row mb-3">
            <div className="col">
              <label for="validationCustom01">First name</label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="John"
                required
              ></textarea>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col">
              <label for="validationCustom02">Last name</label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="Doe"
                required
              ></textarea>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div className="form-row mb-3">
            <div className="col">
              <label for="validationCustom03">Email</label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="example123@domain.com "
                required
              ></textarea>
              <div className="invalid-feedback">
                Please provide a valid Email Address
              </div>
            </div>
          </div>

          <div className="form-row mb-3">
            <div className="col">
              <label for="validationTextarea">Message</label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="Click here to begin typing... "
                required
              ></textarea>
              <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button id="submitButton" className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);
export default ContactMe;
