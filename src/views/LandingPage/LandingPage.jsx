import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
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
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionWork from "./Sections/SectionWork.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    ReactGA.initialize('UA-125368215-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="WiseWallet"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg8.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Say Hello to Impact Spending</h1>
                <h4>
                  WiseWallet allows you to make a difference with your dollars.
                </h4>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  href="#waitlisted"
                  target=""
                >
                  Get Early Access
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
          </div>
        </div>
        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple href="#pablo" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="google">
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </li>
              </ul>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a href="https://www.creative-tim.com">Creative Tim</a> All
                Rights Reserved.
              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <a href="#pablo">
                  <h5>Material Kit PRO</h5>
                </a>
                <p>
                  Probably the best UI Kit in the world! We know you've been
                  waiting for it, so don't be shy!
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo">About us</a>
                  </li>
                  <li>
                    <a href="#pablo">Presentation</a>
                  </li>
                  <li>
                    <a href="#pablo">Contact us</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Sales FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">How to register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sell Goods</a>
                  </li>
                  <li>
                    <a href="#pablo">Receive Payment</a>
                  </li>
                  <li>
                    <a href="#pablo">Transactions Issues</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Transactions FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#pablo">Licenses</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form>
                  <CustomInput
                    id="footeremail"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                      placeholder: "Your Email..."
                    }}
                  />
                  <Button color="primary" justIcon>
                    <Mail />
                  </Button>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
