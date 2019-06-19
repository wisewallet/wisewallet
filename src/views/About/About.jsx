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
import WebFooter from "components/WebFooter/WebFooter.jsx";
import NavBar from "components/NavBar/NavBar.jsx";

class About extends Component{
  render(){
    var userID = sessionStorage.getItem("userID");

    if(userID === null)
      return(<Redirect to="/login"/>)
    return(
      <div>
        <NavBar/>
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
        <WebFooter/>
      </div>
      )
    }
}

export default About;
