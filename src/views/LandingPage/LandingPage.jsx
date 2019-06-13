import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
// @material-ui/icons
// core components
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    ReactGA.initialize('UA-125368215-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }


  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (
      <div>
        <div style={{textAlign: "center", marginTop:"150px"}}>
        <img src={require("assets/img/logo.png")} height="100" width="100"></img>
        <h1 style={{marginTop: "0px"}}>
          WiseWallet
        </h1>
        <p style={{marginLeft:"25%",
          marginRight:"25%",
          fontSize:"15px"}}>
          a way for shoppers to prioritize purchasing decisions based on how 
          corporate factors align with their values and preferences
        </p>
        <Button style={{marginRight: "10px"}}
        variant="outlined"
        color="#012E3C">
        <Link to="/login" style={{color:"#012E3C"}}>Login</Link>
      </Button>
        <Button variant="outlined" color="#012E3C">
          <Link to="/signup" style={{color:"#012E3C"}}>Signup</Link>
        </Button>
      </div>
      <Footer content={<div > <CustomButton justIcon="justIcon" simple="simple" href="https://twitter.com/mywisewallet" color="twitter">
          <i className="fab fa-twitter"/>
        </CustomButton>
        <CustomButton justIcon="justIcon" simple="simple" href="https://www.facebook.com/mywisewallet" color="facebook">
          <i className="fab fa-facebook-square"/>
        </CustomButton>
        <CustomButton justIcon="justIcon" simple="simple" href="https://www.instagram.com/mywisewallet/" color="instagram">
          <i className="fab fa-instagram"/>
        </CustomButton>
        <GridContainer>
          <GridItem sm={3}>
          </GridItem>
          <GridItem sm={6}>
        <div className={classNames(classes.pullCenter, classes.copyRight)} style={{width: 'auto'}}>
          Copyright &copy; {1900 + new Date().getYear()}{" "}
          <a href="http://www.mywisewallet.com">WiseWallet Inc. </a> 
           All Rights Reserved. </div></GridItem>
      </GridContainer>
      </div>}></Footer>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
