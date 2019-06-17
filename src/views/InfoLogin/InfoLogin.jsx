import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import TextField from "@material-ui/core/TextField";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/wisewalletA1.jpg";


class InfoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  handleClick() {
    const {email, password} = this.state;
    console.log("Trying...");
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, password: password})
    })
      .then(response => response.json())
      .then(json => {
      console.log('json', json);
      if(json.data.code === 200){
        console.log("success");
        sessionStorage.setItem('userID', json.data.userdata.user_id);
        sessionStorage.setItem('isAdmin', json.data.userdata.isAdmin);
        if(json.data.userdata.isAdmin){
          this.props.history.push('/companyInfo');
        }
        else
          this.props.history.push('/search');
      }
      })
      .catch(error => alert("Username or Password is invalid"));
  }

  render() {
    const {classes} = this.props;
    return (<div>
      <header>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <Link to="/">
                  <h2><b>WiseWallet</b></h2>
                </Link>
                  <div class="simpborder"></div>
                  <p>Put your money where your mind is.</p>
              </div>
            </div>
          </div>
      </header>
      <div>
        <center>
        <h2><b>Login</b></h2>
        <form
          onSubmit={this.handleClick.bind(this)}
          autoComplete="off">
          <div class="simpborder"></div>
          <TextField
            id="email"
            label="Email"
            required
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"/>
          <br></br>
          <TextField
            id="password"
            label="Password"
            required
            className={classes.textField}
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            autoComplete="current-password"
            margin="normal"/>
          <br></br>
          <Button
            type="submit"
            onClick={this.handleClick}>
            Login
          </Button>
        </form>
        </center>
      </div>
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
    </div>);
  }
}

export default withStyles(loginPageStyle)(InfoLogin);
