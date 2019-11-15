import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import plaidLinkStyle from "assets/jss/material-kit-pro-react/views/plaidLinkStyle.jsx";
import PlaidLink from "react-plaid-link";
import { Redirect } from 'react-router';

import image from "assets/img/thankyou.jpg";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userID: ""
    };
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var userID = sessionStorage.getItem("userID");
    var firstName = sessionStorage.getItem("firstName");
    this.setState({ firstName: firstName });
    this.setState({ userID: userID });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleOnSuccess(token, metadata) {


    fetch("https://tldpv6umn7.execute-api.us-east-1.amazonaws.com/default/exchangetoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userID: sessionStorage.getItem("userID"), public_token: token })
    }).then(response => response.json()).then(json => console.log(json)).then(this.props.history.push('/login'));
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }
  render() {
    const {
      classes,
      firstName,
      ...rest


    } = this.props;
    var welcome = "Thank you for signing up. We will get back to you shortly."
    return (
      <div>
        <Header absolute="absolute" color="transparent" brand="WiseWallet" {...rest} />
        <div className={classes.pageHeader} style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }} >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}> {welcome} </h2>
                  <CardBody>
                    <center>

                      <form>








                      </form>





                    </center>

                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>


        </div>
      </div>
    );
  }
}
export default withStyles(plaidLinkStyle)(Components);
