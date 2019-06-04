import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

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
        if(sessionStorage.isAdmin){
          this.props.history.push('/companyInfo');
        }
        else
          this.props.history.push('/search');
      }
      })
      .catch(error => console.log("request failed", error));
  }

  render() {
    const {classes} = this.props;
    return (<div>
      <Header absolute="absolute" color="transparent" brand="WiseWallet"/>
      <div className={classes.pageHeader} style={{
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <center>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <TextField id="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange("email")} margin="normal"/>
                    <TextField id="password" label="Password" className={classes.textField} type="password" value={this.state.password} onChange={this.handleChange("password")} autoComplete="current-password" margin="normal"/>
                    <Button onClick={this.handleClick}>Signin</Button>
                  </CardBody>
                  <div className={classes.textCenter}>
                  </div>
                </form>
                </center>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>);
  }
}

export default withStyles(loginPageStyle)(InfoLogin);
