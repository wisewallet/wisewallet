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
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import WebFooter from "components/WebFooter/WebFooter.jsx";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class TempLanding extends React.Component{
  constructor(props){
    super(props);
  }

  colors = createMuiTheme({
    palette: {
      primary: {
        main: "#e8b89b"
      }
    }
  })

  render(){
    return(
      <div>
      <div style={{
        padding: "40px",
        textAlign: "left",
        background: "#81A391",
        fontSize: "40px",
        color: "white",
        fontFamily: "gotham-bold",
      }}>
      <img src={require("assets/img/logos/white-logo.png")} height="80" width="100"></img>
        WiseWallet
      </div>
      <Grid
        style={{padding: "40px"}}
        container
        justify="left"
        spacing={3}>
        <Grid style={{paddingTop: "60px"}} 
          item xs={7}>
          <p style={{fontSize: 30, lineHeight: 1.3, fontFamily:"gotham-bold"}}>
          Easily locate brands that align with your values and preferences
        </p>
        <p style={{fontSize: 30, lineHeight: 1.3}}>
        WiseWallet is currently in private beta. Join the waitlist to unlock WiseWallet before it reaches the public.
      </p>
      <center>
      <Button color="error">
        <a style={{color: "#e8b89b"}}
        href="https://mywisewallet.us17.list-manage.com/subscribe?u=0815905065d9f52c9957a3506&id=fce1ac23fe"
        target="_blank">
      <p style={{textAlign: "center", color: "#e8b89b", fontFamily: "gotham-bold", fontSize:20}}>
      Sign Up
    </p></a>
      </Button>
    </center>
      </Grid>
      <Grid item xs={5}>
        <img src={require("assets/img/help.svg")}></img>
      </Grid>
      </Grid>
      <WebFooter/>
    </div>
    )
  }
}

export default TempLanding;
