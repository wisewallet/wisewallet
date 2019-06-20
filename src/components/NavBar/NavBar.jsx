import React, { Component } from "react";
import {Redirect} from "react-router";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

// styling
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";

// material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";

// material-ui icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: sessionStorage.getItem("userID") != null,
      open: false,
    }
    this.logout = this.logout.bind(this);
    this.sideBar = this.sideBar.bind(this);
    this.close = this.close.bind(this);
    this.list = [
      { name: "About Us", url: "about"},
      { name: "Causes", url: 'causes'},
      { name: "FAQ", url: 'faq'},
      { name: "Search", url: 'search'}
    ]
    this.adminList = [
      { name: "Property List", url: "properties"},
      { name: "Company Information", url: 'companyInfo'},
    ]
    console.log(sessionStorage.getItem("isAdmin") == true)
  }

  sideBar = () => {
    this.setState({open: true});
  }

  close = () => {
    this.setState({open:false});
  }

  barList = () => {
    return(
      <div
        style={{width:"150px"}}
        role="presentation"
      >
      <List>
        <ListItem>
          <Button onClick={this.props.history.goBack}>Back</Button>
        </ListItem>
        {this.list.map(item => (
          <ListItem>
            <Link to={"/" + item.url}><ListItemText primary={item.name} /></Link>
          </ListItem>
        ))}
        {sessionStorage.getItem("isAdmin") == true 
          ? this.adminList.map(item => (
              <ListItem>
                <Link to={"/" + item.url}><ListItemText primary={item.name} /></Link>
              </ListItem>
            ))
            : null 
        }
      </List>
      </div>)
  }

  logout = () => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {console.log(response); return response.json()})
      .then(json => {
        sessionStorage.setItem("userID", "");
        window.location.reload();
      })
    .catch(error => console.log("error thrown", error));
  }


  render(){
    var user = sessionStorage.getItem("userID");
    if(!user){
      return(<Redirect to="/login"/>);
    }
    else{
    return(
      <div>
      <AppBar style={{background: "#012E3C", flexGrow: 1}} position="static">
          <Toolbar>
            <IconButton
              style={{outline: "none"}}
              disableRipple
              edge="start"
              color="inherit"
              aria-label="Menu"
              onClick={this.sideBar}
            >
              <MenuIcon/>
            </IconButton>
            <Link to="/search" 
              style={{
                fontSize: "30px",
                marginLeft: "auto",
                marginRight: "auto", 
                color:"#FFFFFF"}}> 
              <img src={require("assets/img/logo_white.png")}
              height="100"
              width="100"></img>
            WiseWallet
            </Link>
            <IconButton 
              style={{marginRight: "20px", outline: "none"}}
              disableRipple
              aria-haspopup="true"
              aria-label="Account"
              aria-controls="customized-menu"
              color="inherit"
              onClick={this.logout}
            > <AccountCircle/> Logout 
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.close}>
          {this.barList()}
        </Drawer>
      </div>
    )
  }
  }
}

export default withRouter(NavBar);
