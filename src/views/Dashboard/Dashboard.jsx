import React from "react";
import {Redirect} from "react-router";
// nodejs library that concatenates classes

// react component used to create nice image meadia player
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import AppHeader from "components/AppHeader/AppHeader.jsx";
import Header from "components/Header/Header.jsx";
import AppHeaderLinks from "components/AppHeader/AppHeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ReactTooltip from "react-tooltip";
// import logo from "assets/img/logo.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import dashboardStyle from "assets/jss/material-kit-pro-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0",
      sScore: 0,
      gScore: 0,
      eScore: 0,
      pScore: 0,
      tScore: 0,
      transactionList: null
    };
    this.onLogOut = this.onLogOut.bind(this);
    this.impactScoreColor = this.impactScoreColor.bind(this);
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
      // body: JSON.stringify({userID: "5f61cc8a-1cc7-48b1-b4bb-e8f3ab318bc3"})
    }).then(response => {
      response.json().then(json => {
        console.log(json);
        this.setState({
          eScore: json.eScore,
          sScore: json.sScore,
          gScore: json.gScore,
          pScore: json.pScore,
          transactionList: json.transactionList,
          tScore: json.tScore
        });
      });
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  onLogOut() {
    sessionStorage.removeItem("userID");
    this.props.history.push("/");
  }
  impactScoreColor(score) {
    if(score <= 65){
      return "lowScore";
    } else if(score > 65 && score <=70 ){
      return "lowMedScore";
    }
    else if(score > 70 && score <=80 ){
      return "highMedScore";
    } else if(score > 80){
      return "highScore";
    }
  }
  render() {
    const classes = this.props;
    var userID = sessionStorage.getItem("userID");
    if (userID == null) {
      return <Redirect to="/login"/>;
    }
    // get data Here

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
    return (<div className={classes.dashboard}>

      <AppHeader brand="WiseWallet" links={(size) => {
        if(size === "small"){
          return <Button
            onClick = {
              this.onLogOut
            }
            variant = "contained"
            color = "#FFFFFF"
            round = "round"
            style = {{
                    position: "relative",
                    float: "right",
                    color: "#092856",
                    backgroundColor: "#FFFFFF"
                  }}
                >
                  Log Out
                </Button>;
        } else{
          return <Button
            onClick = {
              this.onLogOut
            }
            variant = "contained"
            color = "#FFFFFF"
            round = "round"
            style = {{
                    position: "relative",
                    float: "left",
                    marginTop: "15px",
                    marginLeft: "15px",
                    color: "white",
                    backgroundColor: "#6bafe0",
                  }}
                >
                  Log Out
                </Button>;
        }
      }}
          fixed="fixed"
          color="primary"
        />
        <GridContainer
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "90px"
          }}
        >
          <GridItem xs={12} sm={12} md={3}>
            <Card classes={{ root: "card_style" }}>
              <h3 className="impactScoreHeader">Total Impact Score</h3>
              <div className="impactScore" data-tip="Total Impact Score creates a personal impact standard for your everyday spending based on people, planet, and corporate policy.">
                <h2 className="impactScoreNumber">{this.state.tScore}/100</h2>
                <CircularProgress
                  classes={{ colorPrimary: "impactScoreProgress", circle: "impactScoreProgress" }}
                  color="primary"
                  className={"impactScoreProgress " + this.impactScoreColor(this.state.tScore)}
                  variant="static"
                  value={this.state.tScore}
                  size={100}
                />
              </div>

              <SnackbarContent
                message={"People: " + this.state.sScore}
                classes={{ root: "dashboard_snackbar" }}
                data-tip="People Score measures company corporate responsibility reports. Companies with employee-positive policies on equal pay, access to healthcare, and a commitment to workforce diversity and giving back to the community earn higher scores compared to peers."
              />
              <LinearProgress
                data-tip="People Score measures company corporate responsibility reports. Companies with employee-positive policies on equal pay, access to healthcare, and a commitment to workforce diversity and giving back to the community earn higher scores compared to peers."
                variant="determinate"
                color="primary"
                value={this.state.sScore}
                classes={{
                  root: "linear_progress",
                  barColorPrimary: "bar_color1"
                }}
              />
              <SnackbarContent
                message={"Planet: " + this.state.eScore}
                classes={{ root: "dashboard_snackbar" }}
                data-tip="Planet Score measures company greenhouse gas emissions, energy efficiency use, waste management, and investment in renewable energy."
              />
              <LinearProgress
                variant="determinate"
                color="primary"
                data-tip="Planet Score measures company greenhouse gas emissions, energy efficiency use, waste management, and investment in renewable energy."
                value={this.state.eScore}
                classes={{
                  root: "linear_progress",
                  barColorPrimary: "bar_color2"
                }}
              />
              <SnackbarContent
                data-tip="Corporate Governance establishes company management standards to show if a company has board diversity, ESG investing strategy, and has displayed ethical track record."
                message={"Policy: " + this.state.gScore}
                classes={{ root: "dashboard_snackbar" }}
              />
              <LinearProgress
                data-tip="Corporate Governance establishes company management standards to show if a company has board diversity, ESG investing strategy, and has displayed ethical track record."
                variant="determinate"
                color="primary"
                value={this.state.gScore}
                classes={{
                  root: "linear_progress",
                  barColorPrimary: "bar_color3"
                }}
              />
              <SnackbarContent
                data-tip="Politics measures recent political contributions made to PACs and candidate campaigns from company senior executives, Board of Directors, and individual employees"
                message={"Politics: " + this.state.pScore}
                classes={{ root: "dashboard_snackbar" }}
              />
              <LinearProgress
                data-tip="Politics measures recent political contributions made to PACs and candidate campaigns from company senior executives, Board of Directors, and individual employees"
                variant="determinate"
                color="primary"
                value={this.state.pScore}
                classes={{
                  root: this.state.transactionList === null ? "linear_progress last_linear_progress": "linear_progress last_linear_progress politicsLinearProgressBG",
                  barColorPrimary: "bar_color4"
                }}
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <div
              style={{
                overflowX: "auto",
                marginTop: "30px",
                borderRadius: "4px"
              }}
            >
              {this.state.transactionList === null ? (
                <div className="loading">
                  <CircularProgress
                    size={50}
                    classes={{ colorSecondary: "table_loading" }}
                    color="secondary"
                    className={classes.progress}
                  />
                </div>
              ) : (
                <Table style={{ background: "white" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="default" classes={{
                          root: "table_cell"
                        }}>
                        Company
                      </TableCell>
                      <TableCell padding="dense">Date</TableCell>
                      <TableCell padding="dense">Amount</TableCell>
                      <TableCell padding="dense">People</TableCell>
                      <TableCell padding="dense">Planet</TableCell>
                      <TableCell padding="dense">Policy</TableCell>
                      <TableCell padding="dense">Politics</TableCell>
                    </TableRow>
                  </TableHead>
                  {
                    Object.keys(this.state.transactionList).map(t => (<TableRow>
                      <TableCell padding="default" classes={{
                          root: "table_cell"
                        }}>
                        {this.state.transactionList[t].name}
                      </TableCell>
                      <TableCell padding="dense">
                        {this.state.transactionList[t].date}
                      </TableCell>
                      <TableCell padding="dense">
                        {formatter.format(this.state.transactionList[t].amount)}
                      </TableCell>
                      <TableCell padding="dense">
                        {this.state.transactionList[t].sScore}
                      </TableCell>
                      <TableCell padding="dense">
                        {this.state.transactionList[t].eScore}
                      </TableCell>
                      <TableCell padding="dense">
                        {this.state.transactionList[t].gScore}
                      </TableCell>
                      <TableCell padding="dense">
                        {this.state.transactionList[t].pScore}
                      </TableCell>
                    </TableRow>))
                  }
                </Table>)
            }
          </div>
          <center>
            <p style={{
                fontSize: '20pt',
                fontWeight: '600',
                marginTop: '30px'
              }}>Suggested Alternatives Coming Soon</p>
          </center>
        </GridItem>
      </GridContainer>
      <ReactTooltip />
    </div>);
  }
}

export default withStyles(dashboardStyle)(Dashboard);
