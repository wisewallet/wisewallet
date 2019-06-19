import React, { Component } from "react";
import {Redirect} from "react-router";

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
import NavBar from "components/NavBar/NavBar.jsx";

class FAQ extends Component{

  render(){
    var userID = sessionStorage.getItem("userID");

    if(userID === null)
      return(<Redirect to="/login"/>)
    return(
        <div>
          <NavBar/>
          <body>
          <section id="sone">
            <div class="container">
              <div class="col-md-12">
                <h2>FAQ's & A's</h2>
                <div class="simpborder"></div>
              </div>
              
              <div class="col-md-12">
                <h4 style={{paddingTop: "20px", textAlign: 'center'}}>
                  Where do you get your data?
                </h4>
                <div class="simpborder"></div>
                <p style={{paddingTop: "20px", textAlign: 'center'}}>
                  You won’t find “fake news” here. WiseWallet collects verifiable factual data from Non-Governmental Organizations (NGO’s), trustworthy databases, company benefits packages, financial statements, and other reliable data sources. We are fully transparent regarding the methodology and the data sources behind each of the causes we allow users to filter by. #factsonly
                </p>
              </div>

              <div class="col-md-12">
                <h4 style={{paddingTop: "20px", textAlign: 'center'}}>
                  Are you a Certified B Corporation?
                </h4>
                <div class="simpborder"></div>
                <p style={{paddingTop: "20px", textAlign: 'center'}}>
                Not yet, but we plan to apply as soon as it's feasible. We are building WiseWallet with both purpose and profit in mind.
                </p>
              </div>

            </div>
          </section>
        </body>
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

export default FAQ;
