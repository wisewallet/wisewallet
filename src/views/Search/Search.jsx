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

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      causes: [],
      category: "",
    }
    this.state.companies = this.getCompanyData();
    this.state.categories = this.getCategories();
    this.state.causelist = this.getCauselist();
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.ITEM_HEIGHT = 48;
    this.ITEM_PADDING_TOP = 8;
    this.MenuProps = {
      PaperProps: {
        style: {
          maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

  }

  getCompanyData = () => {
    var json = require('../../data/Company.json');
    var companyData = json.data.company_data;
    return companyData;
  }

  getCauselist = () => {
    var json = require('../../data/Properties.json');
    var causelist = json.data.property_data;
    return causelist;
  }

  reset = () => {
    this.setState(this.initialState);
  }
  getCategories = () => {
    var json = require("../../data/Company.json");
    var categories = json.data.company_data.map(info => info.company_category);

    //filters out categories to remove duplicates
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    return categories;
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };

  returnCompanies = () => {
    var companies = [];
    if(this.state.category && this.state.causes.length != 0){
      companies = this.state.companies.filter(data => {
        var isCategory = data.company_category == this.state.category;
        var isCause = this.state.causes.map(element => data.company_cause.includes(element))
          .reduce((output, value) => output && value);
        return isCategory && isCause;
      })
    }
    else if(this.state.category){
      companies = this.state.companies.filter(data => 
        data.company_category == this.state.category);
    }
    else if(this.state.causes.length != 0){
      companies = this.state.companies.filter(data => {
        var isCause = this.state.causes.map(element => data.company_cause.includes(element))
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
  render(){
    return(
    <div>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <a href="search">
                <h2>WiseWallet</h2>
              </a>
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
              <Link to="/filter"> Filter </Link> 
            </div>
          </div>
        </div>
      </header>
      <Grid 
          style={{padding: 10}}
          container
          justify="flex-start"
          spacing={3}>
          <Grid style={{textAlign: 'center'}} item xs={12}>
            <h2> Find  
              <TextField
                id="standard-select-category"
                select
                style={{minWidth:200}}
                label="Company Category"
                value={this.state.category}
                onChange={this.handleChange("category")}
                SelectProps={{
                  MenuProps: {
                    width: 200
                  },
                }}
                margin="normal">
                {this.state.categories.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            that 
              <FormControl>
                <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
              <Select
                style={{minWidth: 150, maxWidth: 500}}
                multiple
                value={this.state.causes}
                onChange={this.handleChange("causes")}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div style={{display:"flex", flexWrap:"wrap"}}>
                    {selected.map(value => (
                      <Chip key={value} label={value} style={{margin:2}} />
                    ))}
                  </div>
                )}
                MenuProps={this.MenuProps}
              >
                {this.state.causelist.map(cause => (
                  <MenuItem key={cause.property_id} value={cause.property_name}>
                    {cause.property_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </h2>
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={12}>
            <Button onClick={this.reset}>
                Reset Search
            </Button>
          </Grid>
          {this.returnCompanies()}
      </Grid>
    </div>
    )
  }
}

export default Search;
