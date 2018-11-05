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
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Paper from '@material-ui/core/Paper';

import {Link} from "react-router-dom";
import logo from "assets/img/logo.png";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";
import testPortrait from "assets/img/testUserIcon.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0",
      sScore: 0,
      gScore: 0,
      eScore: 0,
      transactionList: [],
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
      // body: JSON.stringify({userID: sessionStorage.getItem("userID")})
      body: JSON.stringify({userID: "5f61cc8a-1cc7-48b1-b4bb-e8f3ab318bc3"})

    }).then((response) => {
      response.json().then((json) => {
        console.log(json.transactionList);
        this.setState({
          eScore: json.eScore, sScore: json.sScore, gScore: json.gScore, transactionList: json.transactionList,
        });
      })
    });
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
    var {eScore, gScore, sScore} = this.state;
    var userID = sessionStorage.getItem("userID");
    if (userID == null) {
      return <Redirect to='/login'/>
    }
    const style = {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    };
    // get data Here
    Object.keys(this.state.transactionList).forEach((elem) => {
      console.log(elem);
    });
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
        <GridItem xs={12} sm={12} md={3}>
          <Card style={{
              height: "90%"
            }}>
            <h3 className="impactScoreHeader">Total Impact Score</h3>
              <div className="impactScore">
                <h2 className="impactScoreNumber" >88</h2>
                <CircularProgress className="impactScoreProgress" variant="static" value={88} size={100}/>
                <img className="userPortrait" src={testPortrait} width="100px" />
              </div>
            {  /*<SnackbarContent classes={{ root: 'dashboard_snackbar', disabled: 'disabled', }} message="Total Sales"/>
               <SnackbarContent message="Products" />
               <SnackbarContent message="Orders" />*/}
               <SnackbarContent message={"People - " + this.state.sScore} classes={{ root: 'dashboard_snackbar'}}/>
               <LinearProgress variant="determinate" color="primary" value={this.state.sScore} classes={{ root: 'linear_progress'}}/>
               <SnackbarContent message={"Planet -" + this.state.eScore} classes={{ root: 'dashboard_snackbar'}}/>
               <LinearProgress variant="determinate" color="primary" value={this.state.eScore} classes={{ root: 'linear_progress'}} />
               <SnackbarContent message={"Policy -" + this.state.gScore} classes={{ root: 'dashboard_snackbar'}}/>
               <LinearProgress variant="determinate" color="primary" value={this.state.gScore} classes={{ root: 'linear_progress'}} />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
        <div style={{overflowX: 'auto', marginTop: "30px", borderRadius: "4px",}}>
            <Table style={{background: 'white',}}>
            <TableHead>
              <TableRow>
                <TableCell padding="default" classes ={{ root: "table_cell"}}>Company</TableCell>
                <TableCell padding="dense">Date</TableCell>
                <TableCell padding="dense">Category</TableCell>
                <TableCell padding="dense">Amount</TableCell>
                <TableCell padding="dense">People</TableCell>
                <TableCell padding="dense">Planet</TableCell>
                <TableCell padding="dense">Policy</TableCell>
              </TableRow>
            </TableHead>
            {Object.keys(this.state.transactionList).map((t) =>
              <TableRow>
                <TableCell padding="default" classes ={{ root: "table_cell"}}>{this.state.transactionList[t].name}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].date}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].category}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].amount}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].sScore}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].eScore}</TableCell>
                <TableCell padding="dense">{this.state.transactionList[t].gScore}</TableCell>
              </TableRow>
            )}
            </Table>
            </div>
        </GridItem>

      </GridContainer>
      <GridContainer style={{
          paddingLeft: "10%",
          paddingRight: "10%"
        }}>

        <GridItem xs={12} sm={12} md={3}>
          <Card color="info" style={{}}>
            <CardBody color="info">
              <h3>Suggested Alternatives Coming Soon</h3>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
