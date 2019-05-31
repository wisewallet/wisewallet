import React, { Component } from "react";
import {Redirect} from "react-router";

// react component used to create nice image meadia player
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import AppHeader from "components/AppHeader/AppHeader.jsx";
import Header from "components/Header/Header.jsx";
import AppHeaderLinks from "components/AppHeader/AppHeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ReactTooltip from "react-tooltip";
import Company from "components/company/Company.jsx";
// import logo from "assets/img/logo.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";

class EditCompany extends Component {
  constructor(props){
    super(props);
    this.id = this.props.location.state.id;
    //delete the line below when fetch api works
    // this.id = 9;

    this.state = this.searchCompanyId(this.id);
    console.log(this.state);
  }

  searchCompanyId = (id) => {
    const genCompanyData = require('../../data/Company.json');
    const allProperties = require('../../data/Properties.json');
    var properties = allProperties.data.property_data;
    var data = genCompanyData.data.company_data;
    var company_data = data.filter(info => info.company_id == id)
    var categories = data.map(info => info.company_category);

    //filters out categories to remove duplicates
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));

    //gets the json
    company_data = company_data[0]
    company_data.property_data = properties;
    company_data.categories = categories;
    return company_data;
  }

  componentDidMount() {
    window.scrollTo(0,0);
    document.body.scrollTop = 0;
  }

  render(){
    return(
      <div style={{
        marginLeft:"10px"
        }}>
      <h3>Edit Company Info </h3> 
      <Company
        id={this.state.company_id}
        name={this.state.company_name}
        link={this.state.company_link}
        category={this.state.company_category}
        categories={this.state.categories}
        cause={this.state.company_cause}
        causelist={this.state.property_data}
      />
    </div>
    )
  }
}

export default EditCompany
