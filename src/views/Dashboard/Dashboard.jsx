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
      //return <Redirect to='/login'/>
    }
    return (<div className={classes.dashboard}>
      <Button onClick={this.onLogOut} variant="contained" color="#FFFFFF" round="round" style={{
          position: "absolute",
          float: "right",
          right: "10%",
          top: '15px',
          zIndex: "10000",
          color: "#092856",
          backgroundColor: "#FFFFFF",
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
              <div style={{
                  width: "200px"
                }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Company</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>People</TableCell>
                      <TableCell>Planet</TableCell>
                      <TableCell>Policy</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {"Transaction"}
                      </TableCell>
                      <TableCell string="string">{"10/22/2018"}</TableCell>
                      <TableCell string="string">{"Food"}</TableCell>
                      <TableCell>{11.84}</TableCell>
                      <TableCell>{80}</TableCell>
                      <TableCell>{75}</TableCell>
                      <TableCell>{70}</TableCell>
                    </TableRow>
                    <TableRow key={1}>
                      <TableCell>
                        {"Transaction"}
                      </TableCell>
                      <TableCell string="string">{"10/22/2018"}</TableCell>
                      <TableCell string="string">{"Food"}</TableCell>
                      <TableCell>{11.84}</TableCell>
                      <TableCell>{80}</TableCell>
                      <TableCell>{75}</TableCell>
                      <TableCell>{70}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        {"Transaction"}
                      </TableCell>
                      <TableCell string="string">{"10/22/2018"}</TableCell>
                      <TableCell string="string">{"Food"}</TableCell>
                      <TableCell>{11.84}</TableCell>
                      <TableCell>{80}</TableCell>
                      <TableCell>{75}</TableCell>
                      <TableCell>{70}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        {"Transaction"}
                      </TableCell>
                      <TableCell string="string">{"10/22/2018"}</TableCell>
                      <TableCell string="string">{"Food"}</TableCell>
                      <TableCell>{11.84}</TableCell>
                      <TableCell>{80}</TableCell>
                      <TableCell>{75}</TableCell>
                      <TableCell>{70}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        {"Transaction"}
                      </TableCell>
                      <TableCell string="string">{"10/22/2018"}</TableCell>
                      <TableCell string="string">{"Food"}</TableCell>
                      <TableCell>{11.84}</TableCell>
                      <TableCell>{80}</TableCell>
                      <TableCell>{75}</TableCell>
                      <TableCell>{70}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
