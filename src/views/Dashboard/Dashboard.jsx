import React from "react";
import {Redirect} from 'react-router'
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import AppHeader from "components/AppHeader/AppHeader.jsx";
import AppHeaderLinks from "components/AppHeader/AppHeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {Link} from "react-router-dom";
import logo from "assets/img/logo.png";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
    this.onLogOut = this.onLogOut.bind(this);
  }
  handleSelect = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentWillMount() {
    fetch("https://b87812vlr2.execute-api.us-east-1.amazonaws.com/default/scorecalc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userID: sessionStorage.getItem("userID")})
    }).then(response => response.json()).then(json => console.log(json));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  onLogOut() {
    sessionStorage.removeItem('userID');
    this.props.history.push('/');
  }
  render() {
    const {classes} = this.props;
    var userID = sessionStorage.getItem("userID");
    if (userID == null) {
      return <Redirect to='/login'/>
    }
    return (<div className={classes.dashboard}>
      <Button onClick={this.onLogOut} variant="contained" color="#FFFFFF" round="round" style={{
          position: "absolute",
          float: "right",
          right: "10%",
          top: '15px',
          zIndex: "10000",
          color: "#092856",
          backgroundColor: "#FFFFFF"
        }}>
        Log Out
      </Button>
      <AppHeader brand="WiseWallet" links={<AppHeaderLinks/>} fixed="fixed" color="primary"/>
      <GridContainer style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "90px"
        }}>
        <GridItem xs={12} sm={3} md={3}>
          <Card style={{
              height: "90%"
            }}>
            <h3 style={{
                paddingLeft: "20px"
              }}>Total Impact Score</h3>
            <CircularProgress variant="static" value={88} style={{
                margin: "auto",
                width: "120px",
                left: "-2.4rem",
                top: "-10px",
                position: "relative"
              }}/>
            <h1 style={{
                position: "absolute",
                paddingLeft: "6rem",
                paddingTop: "4.3rem"
              }}>88</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={9} md={9} style={{
            paddingTop: "10px"
          }}>
          <h3>People - 75</h3>
          <LinearProgress variant="determinate" color="primary" value={75} style={{
              margin: "auto"
            }}/>
          <h3>Planet - 98</h3>
          <LinearProgress variant="determinate" color="primary" value={98} style={{
              margin: "auto"
            }}/>
          <h3>Policy - 63</h3>
          <LinearProgress variant="determinate" color="primary" value={63} style={{
              margin: "auto"
            }}/>
        </GridItem>

      </GridContainer>
      <GridContainer style={{
          paddingLeft: "10%",
          paddingRight: "10%"
        }}>

        <GridItem xs={12} sm={3} md={3}>
          <Card color="info" style={{}}>
            <CardBody color="info">
              <h3>Suggested Alternatives Coming Soon</h3>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={9} md={9}>
          <Card style={{}}>
            <CardBody>
                <table style={{width: "100%"}}>
                  <tr>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>People</th>
                    <th>Planet</th>
                    <th>Policy</th>
                  </tr>
                  <tr>
                    <td>Transaction</td>
                    <td>10/18/2018</td>
                    <td>$50.00</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Transaction</td>
                    <td>10/18/2018</td>
                    <td>$50.00</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Transaction</td>
                    <td>10/18/2018</td>
                    <td>$50.00</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Transaction</td>
                    <td>10/18/2018</td>
                    <td>$50.00</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                </table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
