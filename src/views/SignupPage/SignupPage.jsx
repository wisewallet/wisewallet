import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
// @material-ui/icons
import InsertChart from "@material-ui/icons/InsertChart";
import ListIcon from "@material-ui/icons/List";
import Loyalty from "@material-ui/icons/Loyalty";
// core components
import Header from "components/Header/Header.jsx";
import SignUpLinks from "components/Header/SignUpLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import CustomButton from "components/CustomButtons/Button.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/register.jpg";

class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
    
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };
  onSignUp() {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(json => {
        console.log('json', json.data.code);
        if(json.data.code == 200){
          this.props.history.push('/login');
        }
      })
      .catch(error => {alert("Email or user name already exists");console.log("error thrown", error)});
  }

  render() {
    const {
      classes,
      ...rest
    } = this.props;
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
        <center>
          <h2><b> Beta Sign Up</b></h2>
          <div class="simpborder"></div>
          <form 
            onSubmit={this.onSignUp.bind(this)}
            autoComplete="off">
            <TextField
              id="firstName"
              label="First Name"
              required
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange("first_name")}
              margin="normal"/>
          <br></br>
          <TextField
            id="lastName"
            label="Last Name"
            required
            className={classes.textField}
            value={this.state.lastName}
            onChange={this.handleChange("last_name")}
            margin="normal"/>
          <br></br>
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
            id="username"
            label="Username"
            required
            className={classes.textField}
            value={this.state.username}
            onChange={this.handleChange("username")}
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
            color="primary"
            size="medium">
            Sign up
          </Button>
        </form>
        </center>

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

export default withStyles(signupPageStyle)(Components);


