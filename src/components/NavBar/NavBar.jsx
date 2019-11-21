import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// styling
import "assets/css/style.css";
import "assets/css/bootstrap.min.css";

// material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Logo from "components/Logo/Logo.jsx";

// material-ui icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.sideBar = this.sideBar.bind(this);
    this.close = this.close.bind(this);
    this.list = [
      { name: "About Us", url: "about" },
      { name: "Causes", url: "causes" },
      { name: "FAQ", url: "faq" },
      { name: "Search", url: "search" }
    ];
    this.adminList = [
      { name: "Property List", url: "properties" },
      { name: "Company Information", url: "companyInfo" }
    ];
  }

  sideBar = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  barList = () => {
    return (
      <div style={{ width: "150px" }} role="presentation">
        <List>
          {this.list.map(item => (
            <ListItem>
              <Link to={"/" + item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
          {this.adminList.map(item => (
            <ListItem>
              <Link to={"/" + item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  render() {
    return (
      <div>
        <AppBar
          style={{ background: "#031D44", flexGrow: 1 }}
          position="static"
        >
          <Toolbar>
            <IconButton
              style={{ outline: "none" }}
              disableRipple
              edge="start"
              color="inherit"
              aria-label="Menu"
              onClick={this.sideBar}
            >
              <MenuIcon />
            </IconButton>
            <Logo imgSize="50" />
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.close}>
          {this.barList()}
        </Drawer>
      </div>
    );
  }
}

export default withRouter(NavBar);
