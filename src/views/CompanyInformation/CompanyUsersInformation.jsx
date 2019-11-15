import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "assets/css/bootstrap.min.css";
import "assets/css/style.css";
import AddCompany from "components/AddCompany/AddCompany.jsx";
import CompanyInfo from "components/CompanyInfo/CompanyInfoForUser.jsx";
import NavBar from "components/NavBar/NavBar.jsx";
import React, { Component } from "react";
import { Redirect } from "react-router";


class CompanyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_data: [],
      addMode: false,
    };
    this.changeMode = this.changeMode.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    //Update the state to contain the company info 
    fetch("/company_users/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.data.code === 200) {

          this.setState({ company_data: json.data.company_data });

        }
        //   this.setState({company_data: json.data.company_data});
      })
      .catch(error => console.log("Caught Error", error));
  }

  changeMode = () => {
    this.setState({ addMode: !this.state.addMode });
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

          {/* {this.state.company_data.map(info => 
          <CompanyInfo 
            logo={info.logo}
            id={info.company_id}
            name={info.company_name}
            category={info.company_category}
            cause={info.company_cause}
            link={info.company_link}
          />
        )} */}

          <CompanyInfo
            logo={this.state.company_data.logo}
            name={this.state.company_data.name}
            category={this.state.company_data.category}
            cause={this.state.company_data.company_cause}
            link={this.state.company_data.link}
          />
        </TableBody>
      </Table>
    )
  }

  addCompany = () => {
    return <AddCompany />
  }

  render() {
    var userID = sessionStorage.getItem("userID");
    var isCompany = sessionStorage.getItem("isCompany");
    //Redirects the user to the correct page if they are not an admin
    if (userID === '')
      return (<Redirect to="/company_users/login" />);
    else if (isCompany) {
      return (
        <div>
          <NavBar />

          <font style={{ fontFamily: "gotham-regular" }}>
            <h1 style={{ textAlign: 'center' }}> Company Information </h1>
          </font>
          <div style={{ textAlign: 'center' }}>
            <Button variant="outlined" onClick={this.changeMode}>
              {this.state.addMode ? "Show Companies" : "Add Company Info"}
            </Button>
          </div>
          {this.state.addMode ? this.addCompany() : this.companyInfo()}
          <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
        </div>
      )
    }
    else {
      return (<Redirect to="/search" />);
    }
  }
}

export default CompanyInformation;
