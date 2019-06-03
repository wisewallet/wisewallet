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
          <h2 style={{paddingTop: "10px"}}>Cause Overviews & Methodologies</h2>
          <div style={{marginBottom: "10px"}} class="simpborder"></div>
          <figure style={{textAlign:'center'}}>
            <img src={require("../../assets/img/causes/women.png")} 
              alt="Women" width="100" height="100"></img>
            <figcaption class="caption">
              Taken from <b><a class="nocolor" href="https://thenounproject.com/" target="_blank">The Noun Project</a></b>
            </figcaption>
          </figure>
          <h3 style={{textAlign: 'center'}}>
            <b>
            Category: Support Women Leadership
            </b>
          </h3>
            <p>
              Women comprise 47% of the total U.S. labor force, yet only 6.6% of the Fortune 500 and 5% of the S&P 500 have female CEO’s as of May 2019. Only 11 companies on the S&P 500 have achieved gender parity on their boards, just 2.2%. There is a huge gap between women’s participation in the labor force and representation in corporate leadership.
            </p>
          <h3 style={{textAlign: 'center'}}>
            <b>
              Methodology:
            </b>
          </h3>
          <p>
This cause focuses on women-led businesses. We’ve screened for businesses that are women owned and operated, have a female CEO, or have at least 35% of women on their board of directors or executive team.
          </p>
          <h3 style={{textAlign: 'center'}}>
            <b>
              Sources:
            </b>
          </h3>
          <ul>
            <li><a class="nocolor" href="https://www.catalyst.org" target="_blank"> Catalyst </a></li>
            <li>Company Financial Statements         </li>
            <li>Company Web Pages                    </li>
            <li>Women Owned Business Directories     </li>
          </ul>

          <h2 style={{textAlign: 'center'}}> More Causes Coming Soon </h2>
        </div>
      </div>
    </section>
    <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
  </div>
  )}
}

export default Causes;
