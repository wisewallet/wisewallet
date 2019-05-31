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

class Filter extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      "WomenOwned": false,
      "Veteran Owned": false,
      "Pro-LGBTQIA+": false,
      "Support Green Tech": false,
      "Local Business": false,
      "Support Renewable Energy": false,
      "Minority Owned": false,
      "Support Zero Waste": false,
    }
    this.initialState = this.state;
    this.reset = this.reset.bind(this);
    this.companies = this.getCompanyData();
  }

  getCompanyData = () => {
    var json = require('../../data/Company.json');
    var companyData = json.data.company_data;
    return companyData;
  }

  returnCompanies = () => {
    var companies = [];
    var causes = Object.keys(this.state)
      .filter(key => {
        return this.state[key]
      })

    if(causes.length != 0){
      companies = this.companies.filter(data => {
        var isCause = causes.map(element => data.company_cause.includes(element))
          .reduce((output, value) => output && value);
        return isCause;
      });
    }

    if(companies.length != 0){
      return companies.map(company =>
        <Grid style={{padding: 10}} item xs={3}>
          <CompanyCard
            name={company.company_name}
            cause={company.company_cause}
            category={company.company_category}
            link={company.company_link}
          />
        </Grid>);
    }
    else
      return null;
  }


  filters = () => {
    return Object.keys(this.state).map(category => 
    <Grid item xs={3}>
      <h3>{category}</h3>
      <div class="simpborder1"></div>
      <div class="icon-section">
        <Button
          style={{
            backgroundColor:"transparent",
            outline:"none"
          }}
          variant={this.state[category] ? "outlined" : "text"}
          disableRipple={true}
          disableFocusRipple={true}
          onClick={this.handleChange(category)}
        >
        <img src={require("../../assets/img/filters/" + category.toLowerCase().replace(/\s/g, "") + ".png")} 
          width="100"
          height="100"
          alt={category}>
        </img>
      </Button>
      </div>
    </Grid>
    )
  }

  reset = () => {
    this.setState(this.initialState);
  }

  handleChange = name => event => {
    this.setState({[name]: !this.state[name]});
  }

  render(){
    return (
      <div>
        <header>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <Link to="/filter">
                  <h2><b>WiseWallet</b></h2>
                </Link>
                  <div class="simpborder"></div>
                  <p>Put your money where your mind is.</p>
              </div>
            </div>
            <div class="row">
                <div class="col-md-3 text-center">
                  <Link to="/about">About Us</Link>
                </div>
              <div class="col-md-3 text-center">
                <a href="causes.html">Causes</a>
              </div>
              <div class="col-md-3 text-center">
                <a href="FAQ.html">FAQ</a>
              </div>
              <div class="col-md-3 text-center">
                <Link to="/search"> Search </Link> 
              </div>
            </div>
          </div>
        </header>
        <Grid
          style={{padding: 10}}
          container
          justify="flex-start"
          spacing={3}>
          <Grid style={{textAlign: 'center'}}item xs={12}>
            <h2 style={{paddingTop: 20}}>Cause Filters</h2>
            <div class="simpborder"></div>
          </Grid>
          {this.filters()}
          <Grid style={{textAlign: 'center'}} item xs={12}>
            <Button onClick={this.reset}>
              Reset Filter
            </Button>
          </Grid>
        </Grid>
        <Grid
          style={{padding: 20}}
          container
          justify="flex-start"
          spacing={3}>
          {this.returnCompanies()}
        </Grid>
      </div>
    );
  }
}

export default Filter;

