import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ReactGA from 'react-ga';
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    ReactGA.initialize('UA-125368215-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    sessionStorage.setItem('myData', 100);
    console.log(sessionStorage.getItem('myData'));
  }
  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (<div>
      <Header color="transparent" routes={dashboardRoutes} brand="WiseWallet" links={<HeaderLinks dropdownHoverColor = "primary" />} fixed="fixed" changeColorOnScroll={{
          height: 300,
          color: "primary"
        }} {...rest}/>
      <Parallax image={require("assets/img/bg6.png")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Say Hello to Impact Spending</h1>
              <h4>
                WiseWallet allows you to make a difference with your dollars.
              </h4>
              <br/>
              <Button color="primary" size="lg" href="#waitlisted" target="">
                Get Early Access
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct/>
        </div>
      </div>
      <Footer theme="white" content={<div > <Button justIcon="justIcon" simple="simple" href="https://twitter.com/mywisewallet" color="twitter">
          <i className="fab fa-twitter"/>
        </Button>
        <Button justIcon="justIcon" simple="simple" href="https://www.facebook.com/mywisewallet" color="facebook">
          <i className="fab fa-facebook-square"/>
        </Button>
        <Button justIcon="justIcon" simple="simple" href="https://www.instagram.com/mywisewallet/" color="instagram">
          <i className="fab fa-instagram"/>
        </Button>
        <div className={classNames(classes.pullCenter, classes.copyRight)}>
          Copyright &copy; {1900 + new Date().getYear()}{" "}
          <a href="http://www.mywisewallet.com">WiseWallet Inc. </a>
           All Rights Reserved.
           <a href="/privacy" style={{float: 'right'}}>Privacy Policy</a>
        </div>
      </div>}></Footer>
    </div>);
  }
}

export default withStyles(landingPageStyle)(LandingPage);
