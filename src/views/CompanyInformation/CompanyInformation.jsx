import React, { Component } from "react";

// react component used to create nice image meadia player
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import AppHeader from "components/AppHeader/AppHeader.jsx";
import Header from "components/Header/Header.jsx";
import AppHeaderLinks from "components/AppHeader/AppHeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
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
import AddCompany from "components/AddCompany/AddCompany.jsx";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import NavBar from "components/NavBar/NavBar.jsx";
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";

class CompanyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_data: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    //Update the state to contain the company info
    fetch("/admin/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.data.code == 200)
          this.setState({ company_data: json.data.company_data });
      })
      .catch(error => console.log("Caught Error", error));
  }

  companyInfo = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Company Id </TableCell>
            <TableCell> Company Logo </TableCell>
            <TableCell> Company Name </TableCell>
            <TableCell> Categories </TableCell>
            <TableCell> Causes </TableCell>
            <TableCell> Link </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.company_data.map(info => (
            <CompanyInfo
              logo={info.company_logo}
              id={info.company_id}
              name={info.company_name}
              category={info.company_category}
              cause={info.company_cause}
              link={info.company_link}
            />
          ))}
        </TableBody>
      </Table>
    );
  };

  render() {
    return (
      <div>
        <NavBar />
        <Grid style={{ padding: 10 }} container justify="center" spacing={3}>
          <Grid style={{ textAlign: "center" }} item xs={6}>
            <Button>
              <font style={{ fontFamily: "gotham-regular" }}>
                <Link style={{ color: "#000" }} to="/CompanyInfo">
                  {" "}
                  Company Information{" "}
                </Link>
              </font>
            </Button>
          </Grid>
          <Grid style={{ textAlign: "center" }} item xs={6}>
            <Button>
              <font style={{ fontFamily: "gotham-regular" }}>
                <Link style={{ color: "#000" }} to="/properties">
                  {" "}
                  Properties{" "}
                </Link>
              </font>
            </Button>
          </Grid>
        </Grid>
        <font style={{ fontFamily: "gotham-regular" }}>
          <h1 style={{ textAlign: "center" }}> Company Information </h1>
        </font>
        {this.companyInfo()}
        <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
      </div>
    );
  }
}

export default CompanyInformation;
