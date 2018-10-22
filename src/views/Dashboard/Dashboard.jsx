import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import ChartistGraph from "react-chartist";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from '@material-ui/core/LinearProgress';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import profile from "assets/img/profile_placeholder.png";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";
import {Redirect} from 'react-router';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const dailySalesChart = {
  data: {
    labels: [
      "M",
      "T",
      "W",
      "T",
      "F",
      "S",
      "S"
    ],
    series: [
      [
        12,
        17,
        7,
        17,
        23,
        18,
        38
      ]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({tension: 0}),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userID: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }
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
    return (<div style={{
        width: "100%",
        height: "100%",
        position: "absolute"
      }}>
      <div style={{
          background: "blue",
          color: "blue",
          width: "25%",
          height: "100%",
          position: "relative",
          float: "left"
        }}>
        <img src={profile} style={{
            width: "auto",
            height: "30%",
            marginTop: "50px",
            marginLeft: "17%"
          }}/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart="chart" className={classes.cardHover}>
              <CardHeader color="info" className={classes.cardHeaderHover}>
                <ChartistGraph className="ct-chart-white-colors" data={dailySalesChart.data} type="Line" options={dailySalesChart.options} listener={dailySalesChart.animation}/>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Your Score History</h4>
              </CardBody>
              <CardFooter chart="chart"></CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <h2 style={{
          paddingLeft: "30%",
          position: "relative"
        }}>People</h2>
      <LinearProgress variant="determinate" color="primary" value={80} style={{
          width: "65%",
          height: "10px",
          float: "left",
          marginLeft: "5%"
        }}/>
      <h2 style={{
          paddingLeft: "30%",
          position: "relative",
          marginTop: "35px"
        }}>Planet</h2>
      <LinearProgress variant="determinate" color="primary" value={70} style={{
          width: "65%",
          height: "10px",
          float: "left",
          marginLeft: "5%"
        }}/>
      <h2 style={{
          paddingLeft: "30%",
          position: "relative",
          marginTop: "35px"
        }}>Policy</h2>
      <LinearProgress variant="determinate" color="primary" value={75} style={{
          width: "65%",
          height: "10px",
          float: "left",
          marginLeft: "5%"
        }}/>
      <Card color="info" style={{
          width: "65%",
          marginLeft: "5%",
          float: "left"
        }}>
        <CardBody color="color">
          <Table className={classes.table} style={{
              width: "90%"
            }}>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell numeric="numeric">Date</TableCell>
                <TableCell numeric="numeric">People</TableCell>
                <TableCell numeric="numeric">Planet</TableCell>
                <TableCell numeric="numeric">Policy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {"Transaction 1"}
                </TableCell>
                <TableCell string="string">{"October 15, 2018"}</TableCell>
                <TableCell numeric="numeric">{80}</TableCell>
                <TableCell numeric="numeric">{75}</TableCell>
                <TableCell numeric="numeric">{70}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
