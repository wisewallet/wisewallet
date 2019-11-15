import React, { Component } from "react";
import { Redirect } from "react-router";

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
import NavBar from "components/NavBar/NavBar.jsx";

class EditCompany extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.location.state.id;
    if (!this.id) {
      this.user_is_company = sessionStorage.getItem("isCompany");
    }
    else this.user_is_company = false;

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    if (!this.id) {
      if (!this.user_is_company)
        return (<Redirect to="/companyInfo" />);
      else {
        return (
          <div>
            <NavBar />
            <div style={{
              marginLeft: "10px"
            }}>
              <h3>Edit Company Info </h3>
              <Company id={this.id} />
            </div>
            
            <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
          </div>
        )
      }
    }

    else
      return (
        <div>
          <NavBar />
          <div style={{
            marginLeft: "10px"
          }}>
            <h3>Edit Company Info </h3>
            <Company id={this.id} />
          </div>
          <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
        </div>
      )
  }
}

export default EditCompany
