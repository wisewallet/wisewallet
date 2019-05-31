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

class Causes extends Component{
  render(){
    return(
    <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
              <h2>Causes</h2>
              <div class="simpborder"></div>
             
          </div>
        </div>
      </div>
    </header>
    <section id="sone">
      <div class="container">
        <div class="col-md-12">
          <h2 style={{paddingTop: "20px"}}>Cause Overviews & Methodologies</h2>
          <div class="simpborder"></div>
          <h2> Coming Soon </h2>
        </div>
      </div>
    </section>
    <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
  </div>
  )}
}

export default Causes;
