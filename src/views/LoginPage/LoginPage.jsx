import React from "react";
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

import image from "assets/img/bg8.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSignIn = this.onSignIn.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };
  onSignIn() {
    const {email, password} = this.state;
    fetch("https://tldpv6umn7.execute-api.us-east-1.amazonaws.com/default/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: email, password: password})
    }).then(response => response.json()).then(json => {
      console.log('json', json);
      if(json.success){
        console.log("success");
        sessionStorage.setItem('userID', json.userID);
      }
    });
  }
  render() {
    const {classes} = this.props;
    return (<div>
      <Header absolute="absolute" color="transparent" brand="WiseWallet"/>
      <div className={classes.pageHeader} style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <TextField id="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange("email")} margin="normal"/>
                    <TextField id="password" label="Password" className={classes.textField} type="password" value={this.state.password} onChange={this.handleChange("password")} autoComplete="current-password" margin="normal"/>
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple="simple" color="info" size="lg" onClick={this.onSignIn}>
                      Log In
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>);
  }
}

export default withStyles(loginPageStyle)(LoginPage);
