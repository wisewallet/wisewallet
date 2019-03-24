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
      <Header color="transparent" routes={dashboardRoutes} brand="WiseWallet" fixed="fixed" changeColorOnScroll={{
          height: 300,
          color: "#99cc99"
        }} {...rest}/>
      <Parallax image={require("assets/img/wisewallet6.jpg")} filter="light">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}> Put your money where your mind is. </h1>
              <h4 className = {classes.subtitle}>
                Coming soon. Sign up and stay tuned.
              </h4>
              <br/>
              <Button color="#99cc99" size="lg" href="http://mywisewallet.com/signup" target="" className = {classes.landButton}>
                Get Early Access!
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer theme="white" content={<div > <Button justIcon="justIcon" simple="simple" href="https://twitter.com/mywisewallet" color="twitter">
          <i className="fab fa-twitter"/>
        </Button>
        <Button justIcon="justIcon" simple="simple" href="https://www.facebook.com/mywisewallet" color="facebook">
          <i className="fab fa-facebook-square"/>
        </Button>
        <Button justIcon="justIcon" simple="simple" href="https://www.instagram.com/mywisewallet/" color="instagram">
          <i className="fab fa-instagram"/>
        </Button>
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
    </div>);
  }
}

export default withStyles(landingPageStyle)(LandingPage);
