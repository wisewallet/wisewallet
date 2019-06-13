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

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      causes: [],
      category: "",
      companies: [],
      //only temporary
      causelist: [
      {property_name:"Women Led"},{property_name: "Pro-LGBTQIA+"}, {property_name:"Pro-Veterans"}],
      categories: []
    }
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

  /*
   * Make sure to change the query so that admin's are not the only ones who
   * can access this information
   */
  componentDidMount(){
    //Retrieve list of companies & categories
    fetch("/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200){
          this.setState({companies: json.data.company_data});
          this.getCategories(json.data);
          console.log(this.state);
        }
 
      })
      .catch(error => console.log("Caught Error", error));

    //Retrieve list of causes
    fetch("/property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200)
          //Comment out temporarily
          //this.setState({causelist: json.data.property_data});
          console.log("did mount")
      })
      .catch(error => console.log("Caught Error", error));

  }

  /*
   * Functions for handling parsing the data retrieved from API calls
   */

  getCategories = (data) => { 
    var categories = data.company_data.map(info => info.company_category);

    //filters out categories to remove duplicates
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    this.setState({categories: categories});
  }


  /*
   * Functions for handling state changes
   */

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };

  //Resets the search queries that the user selected.
  reset = () => {
    this.setState(this.initialState);
  }

  //Filters out companies based off of the current search query 
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
                <Link to="/causes">Causes</Link>
              </div>
              <div class="col-md-3 text-center">
                <Link to="/FAQ">FAQ</Link>
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
            that are 
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

        <Footer content={<div>
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

export default Search;
