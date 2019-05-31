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
import CompanyInfo from "components/CompanyInfo/CompanyInfo.jsx";
// import logo from "assets/img/logo.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";


class CompanyInformation extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.company_data = this.getCompanyData();
  }

  componentDidMount(){
    window.scrollTo(0,0);
    document.body.scrollTop = 0;

    //Update the state to contain the company info 
    /*fetch("http://test.mywisewallet.com/admin/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200)
          this.setState({company_data: json.data.company_data});
      })
      */
  }

  getCompanyData = () => {
    var json = require('../../data/Company.json');
    var companyData = json.data.company_data;
    return companyData;
  }

  render(){
    var userID = sessionStorage.getItem("userID");
    var isAdmin = true//sessionStorage.getItem("isAdmin");
    //if (userID == null){
    //  return <Redirect to="/login"/>;
    //}
    
    return(
      <div>
        <h1> Company Information </h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Company Id </TableCell>
            <TableCell> Company Name </TableCell>
            <TableCell> Categories </TableCell>
            <TableCell> Causes </TableCell>
            <TableCell> Link </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.company_data.map(info => 
          <CompanyInfo 
            isAdmin={isAdmin}
            id={info.company_id}
            name={info.company_name}
            category={info.company_category}
            cause={info.company_cause}
            link={info.company_link}
          />
        )}
      </TableBody>
      </Table>
      <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
    </div>
    )
  }
}

export default CompanyInformation;
