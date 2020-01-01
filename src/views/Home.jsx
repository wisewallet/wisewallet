import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import FadeInSection from "../components/FadeInSection";

class Home extends Component {
  constructor(props) {
    super(props);
    this.section1 = React.createRef();
  }

  componentDidMount() {
    this.section1.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div id="first" ref={this.section1} class="row">
            <div class="col-sm-6">
              <h1>
                Put your <span class="change-color-1">money</span>
                <br />
                where your <span class="change-color-2">mind </span>
                is
              </h1>
              <p>
                We provide transparency to consumers through data that empowers
                them.
              </p>
              <a href="/about">
                <Button className="button">
                  <span>Find Out More About Us</span>
                </Button>
              </a>
            </div>
            <div class="col-sm-6">
              <img src="wisewalletman.png"></img>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <FadeInSection>
                <img src="pcman.png"></img>
              </FadeInSection>
            </div>
            <div class="col-sm-6">
              <FadeInSection>
                <h1>
                  Database including <br />
                  <span font-weight="bold">100+ companies</span>
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p>
                  Our data empowers consumers to drive the positive social
                  and/or environmental changes they seek through consumption.
                </p>
              </FadeInSection>
              <FadeInSection>
                <a href="/search">
                  <Button className="button2">
                    <span>View our database</span>
                  </Button>
                </a>
              </FadeInSection>
              <svg viewBox="0 0 100 100" className="circlelg">
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="#71CA7C"
                  stroke-width="4"
                  fill="#71CA7C"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <FadeInSection>
                <h1>
                  <span>Join us</span> in all our work
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p>
                  Help us improve our database by adding sustainable companies.
                </p>
              </FadeInSection>
              <FadeInSection>
                <a href="/add">
                  <Button className="button">
                    <span>Add a company</span>
                  </Button>
                </a>
              </FadeInSection>
            </div>
            <div class="col-sm-6">
              <FadeInSection>
                <img src="people.png"></img>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
