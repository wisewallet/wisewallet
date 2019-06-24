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

class Logo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Link to="/search" 
        style={{
          fontSize: "30px",
          marginLeft: "auto",
          marginRight: "auto", 
          color:"#ffffff"}}> 
      <div style={{textAlign: "center"}}>
          <img src={require("assets/img/logos/white-logo.png")}
        height={this.props.imgSize}
        width={this.props.imgSize}></img>
      <font style={{fontFamily: "gotham-bold", fontSize: this.props.fontSize}}>
      &nbsp;WiseWallet
      </font>
  </div>
    </Link>
    )
  }
}

export default withRouter(Logo);
