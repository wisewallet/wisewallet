import React from "react";
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
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
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
  render() {
    const {classes} = this.props;
    var userID = sessionStorage.getItem("userID");
    if (userID == null) {
      return <Redirect to='/login'/>
    }
    return (<div className={classes.dashboard}>
      <Header brand="WiseWallet" links={<HeaderLinks/>} fixed="fixed" color="primary"/>
      <GridContainer style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "90px"
        }}>
        <GridItem xs={12} sm={3} md={3}>
          <Card style={{height: "90%"}}>
              <CircularProgress variant="static" value={88} style={{
                  margin: "auto",
                  width: "150px",
                  position: "relative",
                  left: "-3.4rem"
                }}/>
              <h1 style={{position:"absolute", paddingLeft:"5.8rem", paddingTop:"3rem"}}>88</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={9} md={9} style={{
            paddingTop: "10px"
          }}>
          <h3>People</h3>
          <LinearProgress variant="determinate" color="primary" value={75} style={{
              margin: "auto"
            }}/>
          <h3>Planet</h3>
          <LinearProgress variant="determinate" color="primary" value={98} style={{
              margin: "auto"
            }}/>
          <h3>Policy</h3>
          <LinearProgress variant="determinate" color="primary" value={63} style={{
              margin: "auto"
            }}/>
        </GridItem>

      </GridContainer>
      <GridContainer style={{
          paddingLeft: "10%",
          paddingRight: "10%"
        }}>
        <GridItem xs={12} sm={8} md={8}>
          <Card style={{}}>
            <CardBody>
              <Table className={classes.table} style={{}}>
                <TableHead>
                  <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell numeric="numeric">Date</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>People</TableCell>
                    <TableCell numeric="numeric">Planet</TableCell>
                    <TableCell numeric="numeric">Policy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      {"Transaction"}
                    </TableCell>
                    <TableCell string="string">{"10/22/2018"}</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>{80}</TableCell>
                    <TableCell numeric="numeric">{75}</TableCell>
                    <TableCell numeric="numeric">{70}</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      {"Transaction"}
                    </TableCell>
                    <TableCell string="string">{"10/22/2018"}</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>{80}</TableCell>
                    <TableCell numeric="numeric">{75}</TableCell>
                    <TableCell numeric="numeric">{70}</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      {"Transaction"}
                    </TableCell>
                    <TableCell string="string">{"10/22/2018"}</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>{80}</TableCell>
                    <TableCell numeric="numeric">{75}</TableCell>
                    <TableCell numeric="numeric">{70}</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      {"Transaction"}
                    </TableCell>
                    <TableCell string="string">{"10/22/2018"}</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>{80}</TableCell>
                    <TableCell numeric="numeric">{75}</TableCell>
                    <TableCell numeric="numeric">{70}</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      {"Transaction"}
                    </TableCell>
                    <TableCell string="string">{"10/22/2018"}</TableCell>
                    <TableCell numeric="numeric" style={{
                        width: "10px"
                      }}>{80}</TableCell>
                    <TableCell numeric="numeric">{75}</TableCell>
                    <TableCell numeric="numeric">{70}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <Card color="info" style={{}}>
            <CardBody color="info">
              <h2>Suggested Alternatives Coming Soon</h2>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
