import React, { Component } from "react";
import {Redirect} from "react-router";
import { Link } from "react-router-dom";

// styling
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";

// material-ui components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from "@material-ui/core/Menu";
import FormControl from '@material-ui/core/FormControl';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// react-components
import Footer from "components/WebFooter/WebFooter.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CompanyCard from "components/CompanyCard/CompanyCard.jsx";
import NavBar from "components/NavBar/NavBar.jsx";

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      causes: [],
      category: [],
      companies: [],
      categories: [],
      causelist: [],
    }
    this.searchByCategory = true;
    this.initialState = this.state;
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

    //Function binding 
    this.changeToName = this.changeToName.bind(this);
    this.changeToCategory = this.changeToCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.search = this.search.bind(this);
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
          //this.setState({companies: json.data.company_data});
          this.getCategories(json.data);
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
          this.setState({causelist: json.data.property_data});
      })
      .catch(error => console.log("Caught Error", error));
  }

  /*
   * Functions for handling parsing the data retrieved from API calls
   */

  getCategories = (data) => { 
    var categories = data.company_data.map(info => info.company_category[0]);

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
    this.setState({
      name: "",
      companies: [],
      category: [],
      causes: []
    });
  }

  search = () => {
    const body = {
        search_company_name: this.state.name,
        search_company_category: this.state.category == "" ? [] : [this.state.category],
        search_company_causes: this.state.causes
    }

    //Retrieve list of companies that correspond to the criteria
    fetch("/search", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200){
          this.setState({companies: json.data.company_data});
        }
      })
      .catch(error => console.log("caught error", error));
  }

  returnCompanies = () => {
    var companies = this.state.companies;

    if(companies.length != 0){
      return companies.map(company =>
        <Grid style={{padding: 10}} item xs={3}>
          <CompanyCard
            name={company.company_name}
            cause={company.company_cause}
            category={company.company_category[0]}
            link={company.company_link}
            logo={company.company_logo ? company.company_logo : ""}
          />
        </Grid>);
    }
    else
      return null;
  }

  /*
   * Functions to handle state change for searching
   */
  changeToName = () => {
    this.searchByName = true;
    this.searchByCategory = false;
    this.reset();
  }
  
  changeToCategory = () => {
    this.searchByName = false;
    this.searchByCategory = true;
    this.reset();
  }
  
  //Returns search bar depending on the state
  searchBar = () => {
    if(this.searchByCategory){
      return(
        <div>
        <Grid 
            style={{padding: 10}}
            container
            justify="center"
            spacing={3}>
            <Grid style={{textAlign: 'center'}} item xs={12}>
              <Typography component="div">
              <h2 style={{fontFamily: "gotham-regular"}}> Find&nbsp;
                <TextField
                  id="standard-select-category"
                  fontSize="40"
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
                    <MenuItem style={{fontSize: 20}} key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              &nbsp;that are&nbsp;
                <FormControl>
                  <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
                <Select
                  style={{minWidth: 200, maxWidth: 800}}
                  multiple
                  value={this.state.causes}
                  onChange={this.handleChange("causes")}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={selected => (
                    <div style={{fontSize: 20, display:"flex", flexWrap:"wrap"}}>
                      {selected.map(value => (
                        <Chip
                          key={value}
                          label={value}
                          style={{margin:2}}/>
                      ))}
                    </div>
                  )}
                  MenuProps={this.MenuProps}>
                  {this.state.causelist.map(cause => (
                    <MenuItem style={{fontSize: 20}} key={cause.property_id} value={cause.property_name}>
                      {cause.property_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </h2>
              </Typography>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button onClick={this.search}>
                Search
              </Button>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button onClick={this.reset}>
                  Reset Search
              </Button>
            </Grid>
          </Grid>
        <Grid 
            style={{padding: 10}}
            container
            justify="centered"
            spacing={3}>
            {this.returnCompanies()}
          </Grid>
      </div>
      )
    }
    else if(this.searchByName){
      return(
        <div>
        <Grid 
            style={{padding: 10}}
            container
            justify="center"
            spacing={3}>
            <Grid style={{textAlign: 'center'}} item xs={12}>
              <TextField
                id="name"
                autoComplete="off"
                label="Search By Name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                style={{width: 500}}
                margin="normal"/>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button onClick={this.search}>
                Search
              </Button>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button onClick={this.reset}>
                Reset Search
              </Button>
            </Grid>
          </Grid>
        <Grid 
            style={{padding: 10}}
            container
            justify="centered"
            spacing={3}>
            {this.returnCompanies()}
            </Grid>
          </div>
      )
    }
  }

    /*
  handleMenu = (event) => {
    this.setState({setAnchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({setAnchorEl: null});
  }
  */

  render(){
    var userId = sessionStorage.getItem("userID");

    if(userId === null){
      return(<Redirect to="/login"/>);
    }
    else{
    return(
    <div>
      <NavBar/>
        <Grid 
          style={{padding:10}}
          container
          justify="center"
          spacing={3}>
          <Grid style={{textAlign: 'center'}} item xs={3}>
            <Button variant="outlined" onClick={this.changeToName}>
              Search by Name
            </Button>
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={3}>
            <Button variant="outlined" onClick={this.changeToCategory}>
              Search by Category
            </Button>
          </Grid>
        </Grid>
        {this.searchBar()}
        <Footer/>
    </div>
    )
  }
    }
}

export default Search;
