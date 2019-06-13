import React, { Component } from "react";

import "assets/css/style.css";
import "assets/css/bootstrap.min.css";
import Grid from '@material-ui/core/Grid';
import CompanyCard from "components/CompanyCard/CompanyCard.jsx";
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class About extends Component{
  render(){
    return(
      <div>
      <header>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <Link to="/search">
                  <h2><b>WiseWallet</b></h2>
                </Link>
                  <div class="simpborder"></div>
                  <p>Put your money where your mind is.</p>
              </div>
            </div>
            <div class="row">
                <div class="col-md-3 text-center">
                  <Link to="/about">About us</Link>
                </div>
              <div class="col-md-3 text-center">
                <Link to="/causes">Causes</Link>
              </div>
              <div class="col-md-3 text-center">
                <Link to="/faq">FAQ</Link>
              </div>
              <div class="col-md-3 text-center">
                <Link to="/filter"> Filter </Link> 
              </div>
            </div>
          </div>
        </header>
        <section id="sone">
          <div class="container">
            <div class="col-md-12">
              <h2 style={{paddingTop: "20px"}}>Our Mission</h2>
              <div class="simpborder"></div>
              <h4 style={{textAlign:'center'}}>
                WiseWallet’s mission is to provide transparency to consumers through data that empowers them to shop according to their personal values and to drive the positive social and/or environmental changes that they seek.
              </h4>
            </div>

          </div>
        </section>
        <Footer theme="white" content={<div>
          <CustomButton justIcon="justIcon" simple="simple" href="https://twitter.com/mywisewallet" color="twitter">
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
          <div style={{width: 'auto'}}>
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            <a href="http://www.mywisewallet.com">WiseWallet Inc. </a> 
            All Rights Reserved. </div></GridItem>
        </GridContainer>
        </div>}></Footer>
      </div>

      )
    }
}

export default About;
