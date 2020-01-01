import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import Button from "react-bootstrap/Button";
import FadeInSection from "../components/FadeInSection";

const Footer = () => {
  return (
    <div
      style={{ paddingBottom: "20%", backgroundColor: "#f6fdf6" }}
      className="container-fluid"
    >
      <div class="row">
        <div class="col-sm-6">
          <FadeInSection>
            <h1>
              We want to <br /> hear from you.
            </h1>
          </FadeInSection>
        </div>
        <div style={{ paddingLeft: "10%" }} class="col-sm-6">
          <FadeInSection>
            <a href="/contact">
              <Button className="button2">
                <span>Contact Us</span>
              </Button>
            </a>
          </FadeInSection>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <FadeInSection>
            <a href="/">
              <img id="logo" src="logo.png"></img>
            </a>
          </FadeInSection>
        </div>
        <div class="col-sm">
          <FadeInSection>
            <a href="/about">
              <span>About Us</span>
            </a>
            <br />
            <br />
            <a href="/search">
              <span>Directory</span>
            </a>
            <br />
            <br />
            <a href="/add">
              <span>Add a Company</span>
            </a>
            <br />
            <br />
            <a href="/contact">
              <span>Contact Us</span>
            </a>
            <br />
            <br />
          </FadeInSection>
        </div>
        <div class="col-sm">
          <FadeInSection>
            <div align="center" class="socialbtns">
              <a
                href="https://web.facebook.com/mywisewallet?_rdc=1&_rdr"
                class="fa fa-lg fa-facebook"
              ></a>
              <a
                href="https://twitter.com/mywisewallet"
                class="fa fa-lg fa-twitter"
              ></a>
              <a
                href="https://www.instagram.com/mywisewallet/"
                class="fa fa-lg fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/company/wisewallet/"
                class="fa fa-lg fa-linkedin"
              ></a>
              <a
                href="mailto:russell@mywisewallet.com"
                class="fa fa-lg fa-google"
              ></a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};
export default Footer;
