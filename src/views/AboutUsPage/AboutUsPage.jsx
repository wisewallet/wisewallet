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
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.jsx";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
const dashboardRoutes = [];
class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header color="transparent" routes={dashboardRoutes} brand="WiseWallet" links={<HeaderLinks dropdownHoverColor = "primary" />} fixed="fixed" changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}/>
        <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>About Us</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionServices />
          </div>
        </div>
        <div style={{
            height: "100px", width: "100px"
          }}>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
