import React, { Component } from "react";
import ReactDOM from "react-dom";
import FadeInSection from "../components/FadeInSection";
import { Form, Button } from "react-bootstrap";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      socialValues: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.company === "" ||
      this.state.socialValues === "" ||
      this.state.location === ""
    ) {
      alert("Please enter in all the fields!");
    } else {
      const templateId = "template_o7xYCsSx";

      this.sendFeedback(templateId, {
        message_html: `<h1>Company: ${this.state.company}, Social Values: ${this.state.socialValues}, Location: ${this.state.location}</h1>`,
        from_name: "user",
        reply_to: "no-reply",
        to_name: "mywisewalletdemo@gmail.com"
      });
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
        alert(
          "Thank you. We will review your submission and add it to our database."
        );
        this.setState({
          name: "",
          email: "",
          company: "",
          socialValues: "",
          location: ""
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <div>
        <div class="row">
          <div id="first" class="col-sm-6">
            <h1 style={{ textAlign: "center" }}>
              <span>Add a Company</span>
            </h1>
            <Form className="addForm">
              <FadeInSection>
                <Form.Group>
                  <Form.Label>
                    <p>Your Name</p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Your Name"
                    value={this.state.name}
                    required
                    onChange={this.handleChange("name")}
                  />
                </Form.Group>
              </FadeInSection>
              <FadeInSection>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>
                    <p>Your Email</p>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    value={this.state.email}
                    required
                    onChange={this.handleChange("email")}
                  />
                </Form.Group>
              </FadeInSection>
              <FadeInSection>
                <Form.Group>
                  <Form.Label>
                    <p>Company Name</p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Company Name"
                    value={this.state.company}
                    required
                    onChange={this.handleChange("company")}
                  />
                </Form.Group>
              </FadeInSection>
              <FadeInSection>
                <Form.Group>
                  <Form.Label>
                    <p>Social Values</p>
                  </Form.Label>
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    placeholder="Social Values"
                    value={this.state.socialValues}
                    required
                    onChange={this.handleChange("socialValues")}
                  />
                </Form.Group>
              </FadeInSection>
              <FadeInSection>
                <Form.Group>
                  <Form.Label>
                    <p>Location</p>
                  </Form.Label>
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    placeholder="Location"
                    value={this.state.location}
                    required
                    onChange={this.handleChange("location")}
                  />
                </Form.Group>
              </FadeInSection>
              <FadeInSection>
                <Button
                  onClick={this.handleSubmit}
                  className="button2"
                  type="submit"
                >
                  <span>Submit</span>
                </Button>
              </FadeInSection>
            </Form>
          </div>
          <div class="col-sm-6">
            <img src="companyAdd.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
