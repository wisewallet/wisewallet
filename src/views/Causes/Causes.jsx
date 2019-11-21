import React, { Component } from "react";
import { Redirect } from "react-router";

import "assets/css/style.css";
import "assets/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";
import CompanyCard from "components/CompanyCard/CompanyCard.jsx";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import WebFooter from "components/WebFooter/WebFooter.jsx";
import NavBar from "components/NavBar/NavBar.jsx";

class Causes extends Component {
  render() {
    var userID = sessionStorage.getItem("userID");

    if (userID === null) return <Redirect to="/login" />;
    return (
      <div>
        <NavBar />
        <section style={{ backgroundColor: "#EEEEEE" }} id="sone">
          <div class="container">
            <div class="col-md-12">
              <h2 style={{ paddingTop: "10px" }}>
                Cause Overviews & Methodologies
              </h2>
              <div style={{ marginBottom: "10px" }} class="simpborder"></div>
              <figure style={{ textAlign: "center" }}>
                <img
                  src={require("../../assets/img/causes/women.png")}
                  alt="Women"
                  width="100"
                  height="100"
                ></img>
              </figure>
              <h3 style={{ textAlign: "center" }}>
                <b>Category: Support Women Leadership</b>
              </h3>
              <p>
                Women comprise 47% of the total U.S. labor force, yet only 6.6%
                of the Fortune 500 and 5% of the S&P 500 have female CEO’s as of
                May 2019. Only 11 companies on the S&P 500 have achieved gender
                parity on their boards, just 2.2%. There is a huge gap between
                women’s participation in the labor force and representation in
                corporate leadership.
              </p>
              <h3 style={{ textAlign: "center" }}>
                <b>Methodology:</b>
              </h3>
              <p>
                This cause focuses on women-led businesses. We’ve screened for
                businesses that are women owned and operated, have a female CEO,
                or have at least 35% of women on their board of directors or
                executive team.
              </p>
              <h3 style={{ textAlign: "center" }}>
                <b>Sources:</b>
              </h3>
              <ul style={{ textAlign: "center" }}>
                <li className="center">
                  <a
                    class="nocolor"
                    href="https://www.catalyst.org"
                    target="_blank"
                  >
                    {" "}
                    Catalyst{" "}
                  </a>
                </li>
                <li className="center">Company Financial Statements </li>
                <li className="center">Company Web Pages </li>
                <li className="center">Women Owned Business Directories </li>
              </ul>

              <div class="simpborder"></div>

              <figure style={{ textAlign: "center" }}>
                <img
                  src={require("../../assets/img/causes/lgbtq.png")}
                  alt="Women"
                  width="100"
                  height="100"
                ></img>
              </figure>
              <h3 style={{ textAlign: "center" }}>
                <b>Category: Pro-LGBTQIA+</b>
              </h3>
              <p>
                Without a federal law protecting LGBTQIA+ Americans in the
                workplace, non-discrimination laws vary from state to state. How
                to approach workplace inclusion and protection of LGBTQIA+
                individuals is still largely in the hands of corporations.
              </p>
              <h3 style={{ textAlign: "center" }}>
                <b>Methodology:</b>
              </h3>
              <p>
                This cause focuses on the highest standards of LGBTQIA+
                inclusivity. We’ve screened for companies that show
                organizational competency in LGBTQIA+ inclusion: they offer
                equal benefits, display a public commitment to inclusivity,
                abide by U.S. contractor and vendor standards, and have
                implemented and operate according to global non-discrimination
                policies and codes of conduct (HRC: CEI scores of 100). For
                small businesses, we’ve screened for those that are 51% owned,
                operated, managed, and controlled by an LGBTQIA+ person or
                persons.
              </p>
              <h3 style={{ textAlign: "center" }}>
                <b>Sources:</b>
              </h3>
              <ul style={{ textAlign: "center" }}>
                <li>Human Rights Campaign: Corporate Equality Index</li>
                <li>National LGBT Chamber of Commerce</li>
              </ul>

              <div class="simpborder"></div>
            </div>
          </div>
        </section>
        <WebFooter />
      </div>
    );
  }
}

export default Causes;

/*
 *
 *
 *          <figure style={{textAlign:'center'}}>
            <img src={require("../../assets/img/causes/veterans.png")} 
              alt="Women" width="100" height="100"></img>
            <figcaption class="caption">
              Taken from <b><a class="nocolor" href="https://thenounproject.com/" target="_blank">The Noun Project</a></b>
            </figcaption>
          </figure>
          <h3 style={{textAlign: 'center'}}>
            <b>
            Category: Pro-Veterans 
            </b>
          </h3>
            <p>
              Coming Soon
            </p>
          <h3 style={{textAlign: 'center'}}>
            <b>
              Methodology:
            </b>
          </h3>
          <p>
            Coming Soon
          </p>
          <h3 style={{textAlign: 'center'}}>
            <b>
              Sources:
            </b>
          </h3>
          <p>
            Coming Soon
          </p>

          <h2 style={{textAlign: 'center'}}> More Causes Coming Soon </h2>
*/
