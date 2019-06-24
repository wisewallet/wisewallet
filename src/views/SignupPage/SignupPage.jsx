import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

// @material-ui/icons
import InsertChart from "@material-ui/icons/InsertChart";
import ListIcon from "@material-ui/icons/List";
import Loyalty from "@material-ui/icons/Loyalty";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";

// core components
import Header from "components/Header/Header.jsx";
import SignUpLinks from "components/Header/SignUpLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WebFooter from "components/WebFooter/WebFooter.jsx";
import Logo from "components/Logo/Logo.jsx";

// utility functions
import { validateSignup } from "utils/SignupPage/Verification.jsx"

// styling & images 
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";
import image from "assets/img/register.jpg";

class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //Keep track of status
      error: false,
      errorMessage: "",
      success: false,
      
      //User info
      email: "",
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    }
    this.onSignUp = this.onSignUp.bind(this);
  }
    
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

  }

  //Handles changes in the form 
  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  handleClose = () => {
    this.setState({error: false});
  }

  onSignUp = () => {
    const results = validateSignup(this.state)
    this.setState({
      error: results.error,
      errorMessage: results.errorMessage,
      success: results.success
    });

    var info = {
          "email": this.state.email,
          "username": this.state.username,
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "password": this.state.password
    }

    if(results.success){
      fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(info)
      })
        .then(response => response.json())
        .then(json => {
          console.log('json', json.data.code);
          if(json.data.code == 200){
            this.props.history.push('/');
          }
          if(json.data.code == 400){
            alert("This username or email already exists");
          }
        })
        .catch(error => console.log("error thrown", error));
    }
  }

  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (<div>
      <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <Link to="/">
                  <h2>
          <img src={require("assets/img/logos/white-logo.png")}
        height="42"
        width="42"></img>
                    <b>WiseWallet</b></h2>
                </Link>
                  <div className="simpborder"></div>
                  <p>Put your money where your mind is.</p>
              </div>
            </div>
          </div>
      </header>
        <center>
          <h2><b>Waitlist Sign Up</b></h2>
          <div className="simpborder"></div>
          <form 
            autoComplete='off'>
            <TextField
              id="firstName"
              label="First Name"
              required
              className={classes.textField}
              value={this.state.first_name}
              onChange={this.handleChange("first_name")}
              margin="normal"/>
          <br></br>
          <TextField
            id="lastName"
            label="Last Name"
            required
            className={classes.textField}
            value={this.state.last_name}
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
        </form>
        <Button
          color="primary"
          onClick={this.onSignUp}
          size="medium">
          Sign up
        </Button>
        </center>

        <Snackbar anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
          }}
          open={this.state.error}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">{this.state.errorMessage}</span>}
        >
        </Snackbar>
        <WebFooter/>
      </div>);
  }
}

export default withStyles(signupPageStyle)(Components);
