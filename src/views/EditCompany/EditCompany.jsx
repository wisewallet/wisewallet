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
    //this.id = this.props.location.state.id;
    //delete the line below when fetch api works
    this.state = this.props.location.state;
    this.id = 9;
  }

  getCompanyInfo = () => {
    const id = this.id;
    fetch("http://test.mywisewallet.com/admin/company/edit/" + id, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        if(json.data.code == 200){
          console.log("success");
          this.state = json.data;
        }
      })
      .catch(error => console.log("Error found", error));
  }
  componentDidMount() {
    window.scrollTo(0,0);
    document.body.scrollTop = 0;
  }

  render(){
    this.getCompanyInfo()
    return(
      <div style={{
        marginLeft:"10px"
        }}>
      <h3>Edit Company Info </h3> 
      <Company
        id={this.state.id}
        name={this.state.name}
        link={this.state.link}
        category={this.state.category}
        categories={this.state.categories}
        cause={this.state.cause}
        causelist={this.state.causes}
      />
    </div>
    )
  }
}

export default EditCompany
