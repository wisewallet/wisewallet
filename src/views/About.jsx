import React, { Component } from "react";
import ReactDOM from "react-dom";
import FadeInSection from "../components/FadeInSection";
import Button from "react-bootstrap/Button";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { animationIsDone: false };
  }

  async componentDidMount() {
    let spans = document.querySelectorAll(".word span");
    spans.forEach((span, idx) => {
      span.addEventListener("click", e => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", e => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 1400 * (idx + 1));
    });
    document.addEventListener("scroll", () => {
      this.setState({ animationIsDone: true });
      document.getElementById("scroll").style.display = "none";
      document.getElementsByClassName("word")[0].style.paddingBottom = "20%";
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", function() {
      this.setState({ animationIsDone: false });
    });
  }
  otherInfo = () => {
    return (
      <div class="row">
        <div id="about" class="col-sm-12">
          <FadeInSection>
            <h1 style={{ textDecoration: "underline" }}> Mission</h1>
          </FadeInSection>
          <FadeInSection>
            <div
              class="col-sm-12"
              style={{ paddingTop: "5%", backgroundColor: "#f6fdf6" }}
            >
              <p
                style={{
                  paddingLeft: "5%",
                  paddingBottom: "5%",
                  textAlign: "left",
                  paddingRight: "5%"
                }}
              >
                WiseWallet’s mission is to provide transparency to consumers
                through data that empowers them to shop according to their
                personal values and in turn drive the positive social and/or
                environmental changes that they seek.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <h1>Our data comes from...</h1>
          </FadeInSection>
          <FadeInSection>
            <h3>Non-Governmental Organizations</h3>
            <h3>Trustworthy Databases</h3>
            <h3>Company Benefit Packages</h3>
            <h3>Financial Statements</h3>
            <h3> and more...</h3>
          </FadeInSection>
          <FadeInSection>
            <div
              class="col-sm-12"
              style={{ paddingTop: "5%", backgroundColor: "#f6fdf6" }}
            >
              <p
                style={{
                  paddingLeft: "5%",
                  paddingBottom: "5%",
                  textAlign: "left",
                  paddingRight: "5%"
                }}
              >
                We are fully transparent regarding the methodology and the data
                sources behind each of the causes we allow users to filter by.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div
              class="col-sm-12"
              style={{
                paddingTop: "5%",
                paddingBottom: "10%"
              }}
            >
              <h1
                style={{
                  paddingBottom: "0px",
                  textAlign: "center"
                }}
              >
                Join us in building a trustworthy database.
              </h1>
              <FadeInSection>
                <a href="/add">
                  <Button className="button">
                    <span>Add a company</span>
                  </Button>
                </a>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>
      </div>
    );
  };

  handleEnd = e => {
    e.target.style.animation = undefined;
    e.target.style.color = "#5ecb6b";
  };
  handleEnd2 = e => {
    e.target.style.textDecoration = "underline";
    this.setState({ animationIsDone: true });
  };
  handleClick = e => {
    e.target.style.animation = "toplong 1.5s ease-in";
    e.target.style.animationIterationCount = 1;
  };
  handleClick2 = e => {
    e.target.style.animation = "ballet 1.5s ease-in";
  };
  handleClick3 = e => {
    e.target.style.animation = "rotate 1.5s ease-in";
  };
  handleClick4 = e => {
    e.target.style.animation = "balance 1.5s ease-in";
  };
  handleClick5 = e => {
    e.target.style.textDecoration = "underline";
  };
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <img id="leaf" src="leaf.png"></img>
          </div>
          <div class="col-sm-12">
            <div class="word">
              <span onClick={this.handleClick} onAnimationEnd={this.handleEnd}>
                W
              </span>
              <span onClick={this.handleClick2} onAnimationEnd={this.handleEnd}>
                I
              </span>
              <span onClick={this.handleClick3} onAnimationEnd={this.handleEnd}>
                S
              </span>
              <span onClick={this.handleClick4} onAnimationEnd={this.handleEnd}>
                E
              </span>
              <span
                onClick={this.handleClick5}
                onAnimationEnd={this.handleEnd2}
              >
                WALLET
              </span>
            </div>
            <h7 id="scroll">Scroll to know more about us.</h7>
          </div>
          {this.state.animationIsDone ? this.otherInfo() : null}
        </div>
      </div>
    );
  }
}

export default About;
