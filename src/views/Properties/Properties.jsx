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
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from '@material-ui/core/TextField';
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ReactTooltip from "react-tooltip";
import PropertyInfo from "components/PropertyInfo/PropertyInfo.jsx";
// import logo from "assets/img/logo.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";
import AddProperty from "components/AddProperty/AddProperty.jsx";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import NavBar from "components/NavBar/NavBar.jsx";

class Properties extends Component {
  constructor(props){
    super(props);
    this.state = {
      property_list: [],
      addMode: false,
    };
    this.changeMode = this.changeMode.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    document.body.scrollTop = 0;

    //Update the state to contain the company info 
    fetch("/admin/property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200)
          this.setState({property_list: json.data.property_data});
      })
      .catch(error => console.log("Caught Error", error));
  }

  changeMode = () => {
    this.setState({addMode: !this.state.addMode});
  }

  propertyInfo = () => {
    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Property Id </TableCell>
            <TableCell> Property Name </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.property_list.map(info => 
          <PropertyInfo 
            id={info.property_id}
            name={info.property_name}
          />
        )}
      </TableBody>
      </Table>
    )
  }

  addProperty = () => {
    return <AddProperty/>
  }

  render(){
    var userID = sessionStorage.getItem("userID");
    var isAdmin = sessionStorage.getItem("isAdmin");

    //Redirects the user to the correct page if they are not an admin
    if (userID == '')
      return (<Redirect to="/login"/>);
    else if(!isAdmin)
      return (<Redirect to="/search"/>);
    
    return(
      <div>
        <NavBar/>
        <Grid
          style={{padding:10}}
          container
          justify="center"
          spacing={3}>
          <Grid style={{textAlign: 'center'}} item xs={6}>
            <Button>
              <Link style={{color: '#000'}} to="/CompanyInfo"> Company Information </Link>
            </Button>
          </Grid>
          <Grid style={{textAlign: 'center'}} item xs={6}>
            <Button>
              <Link style={{color: '#000'}} to="/properties"> Properties </Link>
            </Button>
          </Grid>
        </Grid>
        <h1 style={{textAlign: 'center'}}> Property Information </h1>
        <div style={{textAlign: 'center'}}> 
          <Button variant="outlined" onClick={this.changeMode}>
            {this.state.addMode ? "Show Properties" : "Add New Property" }
          </Button>
        </div>
        {this.state.addMode ? this.addProperty() : this.propertyInfo()}
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

export default Properties;
