import React, { Component } from "react";
import {Redirect} from "react-router";
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
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import TextField from "@material-ui/core/TextField";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import WebFooter from "components/WebFooter/WebFooter.jsx";

import image from "assets/img/wisewalletA1.jpg";
import "assets/css/style.css";


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
        else{
          alert("Username or Password is invalid")
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const {classes} = this.props;
    if(sessionStorage.getItem("userID")){
      return(<Redirect to="/search"/>)
    }
    return (<div>
      <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <Link to="/">
                  <h2>WiseWallet</h2>
                </Link>
                  <div className="simpborder"></div>
                  <p>Put your money where your mind is.</p>
              </div>
            </div>
          </div>
      </header>
      <div>
        <center>
        <h2 style={{fontFamily:"gotham-bold"}}>Login</h2>
        <form
          autoComplete="off">
          <div className="simpborder"></div>
          <TextField
            id="email"
            label="Email"
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
            onClick={this.handleClick}>
            Login
          </Button>
        </form>
        </center>
      </div>
      <WebFooter/>
    </div>);
  }
}

export default withStyles(loginPageStyle)(InfoLogin);
