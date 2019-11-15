import Button from "@material-ui/core/Button";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import "assets/css/style.css";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import WebFooter from "components/WebFooter/WebFooter.jsx";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";


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
    this.setState({ [name]: event.target.value });
  };

  handleClick() {
    const { email, password } = this.state;
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(json => {
        if (json.data.code === 200) {
          sessionStorage.setItem('userID', json.data.userdata.user_id);
          sessionStorage.setItem('isAdmin', json.data.userdata.isAdmin);
          if (json.data.userdata.isAdmin) {
            this.props.history.push('/companyInfo');
          }
          else
            this.props.history.push('/search');
        }
        else {
          alert("Email or Password is invalid")
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;
    if (sessionStorage.getItem("userID")) {
      return (<Redirect to="/search" />)
    }
    return (<div>
      <header style={{ backgroundColor: "#031D44" }} >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <Link to="/">
                <h2>
                  <img src={require("assets/img/logos/white-logo.png")}
                    height="42"
                    width="42"></img>
                  WiseWallet</h2>
              </Link>
              <div className="simpborder"></div>
              <p>Put your money where your mind is.</p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <center>
          <h2 style={{ fontFamily: "gotham-bold" }}>Login</h2>
          <form
            autoComplete="off">
            <div className="simpborder"></div>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange("email")}
              margin="normal" />
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
              margin="normal" />
            <br></br>
            <Button style={{ marginRight: "10px" }} variant="outlined" color="#031d44"
              onClick={this.handleClick}>
              Login
          </Button>
            <Button variant="outlined" color="#031d44">
              <Link to="/company/login" style={{ color: "#012E3C" }}>If you are company</Link>
            </Button><br></br><br></br>
            Don't have account
            <Button style={{ marginLeft: "10px" }} variant="outlined" color="#031d44">
              <Link to="/signup" style={{ color: "#012E3C" }}>Beta Signup</Link>
            </Button>
            <br></br>
            <br></br>
            If you are Company User
            <Button style={{ marginLeft: "10px" }} variant="outlined" color="#031d44">
              <Link to="/company/signup" style={{ color: "#012E3C" }}>Beta Company Signup</Link>
            </Button>

          </form>
        </center>
      </div>
      <WebFooter />
    </div>);
  }
}

export default withStyles(loginPageStyle)(InfoLogin);
