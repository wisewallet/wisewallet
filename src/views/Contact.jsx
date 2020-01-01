import React, { Component } from "react";
import ReactDOM from "react-dom";
import FadeInSection from "../components/FadeInSection";
import { Form, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      company: "",
      title: "",
      city: "",
      email: "",
      message: ""
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
      this.state.first === "" ||
      this.state.last === "" ||
      this.state.company === "" ||
      this.state.title === "" ||
      this.state.city === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      alert("Please enter in all the fields! ");
    } else {
      const templateId = "template_o7xYCsSx";
      this.sendFeedback(templateId, {
        message_html: `<p> First Name: ${this.state.first}, Last Name: ${this.state.last}, Company: ${this.state.company}, Title: ${this.state.title}, City: ${this.state.city}, Email: ${this.state.email}, Message: ${this.state.message}</p>`,
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
        alert("Thank you for your interest. We will get back to you soon.");
        console.log("Email successfully sent!");
        this.setState({
          first: "",
          last: "",
          company: "",
          title: "",
          city: "",
          email: "",
          message: ""
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
      <div class="row">
        <div id="first" class="col-sm-6">
          <h1>
            <span>Get in Touch</span>
          </h1>
          <Form className="addForm">
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>First Name</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="First Name"
                  value={this.state.first}
                  required
                  onChange={this.handleChange("first")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>Last Name</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={this.state.last}
                  onChange={this.handleChange("last")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>Company</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Company"
                  required
                  value={this.state.company}
                  onChange={this.handleChange("company")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>Title</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>City</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="City"
                  required
                  value={this.state.city}
                  onChange={this.handleChange("city")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>
                  <p>Email Address</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Form.Group>
                <Form.Label>
                  <p>Message</p>
                </Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Message"
                  required
                  value={this.state.message}
                  onChange={this.handleChange("message")}
                />
              </Form.Group>
            </FadeInSection>
            <FadeInSection>
              <Button
                className="button2"
                onClick={this.handleSubmit}
                type="submit"
              >
                <span>Submit</span>
              </Button>
            </FadeInSection>
          </Form>
        </div>
        <div id="contact" class="col">
          <FadeInSection>
            <img id="woman" src="contact.png"></img>
          </FadeInSection>
        </div>
      </div>
    );
  }
}

export default Contact;
