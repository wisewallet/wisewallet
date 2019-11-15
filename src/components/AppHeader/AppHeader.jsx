import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Close from "@material-ui/icons/Close";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import logo from "assets/img/logo.png";
// core components
import headerStyle from "assets/jss/material-kit-pro-react/components/headerStyle.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }
  handleDrawerToggle() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const {classes, color, changeColorOnScroll} = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  onLogOut() {
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('isCompany');
    return <Redirect to='/login'/>
  }
  render() {
    const {
      classes,
      color,
      links,
      brand,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    return (<AppBar className={appBarClasses}>
      <GridContainer
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
      <Toolbar className={classes.container}>
        <Button className={classes.title} >
          <img src={logo} style={{
              height: "auto",
              width: "50px",
            }} alt={"WiseWallet"}/>
          <Link to="/">WiseWallet<p style={{
        position: "absolute",
        left: "130px",
        top: "35px"
      }}>BETA</p>
          </Link>
        </Button>
      </Toolbar>
      </GridContainer>
      <Hidden mdUp="mdUp">
        <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} style={{
          position: "absolute",
          top: "20px",
          right: "0px",
          marginRight: "30px",
        }}>
          <Menu/>
        </IconButton>
      </Hidden>
      <Hidden smDown="smDown" implementation="css" className={classes.hidden}>
      <div style={{
        position: "absolute",
        top: "20px",
        right: "0px",
        marginRight: "100px",
      }}>{links("small")}</div>
      </Hidden>
      <Hidden mdUp="mdUp" implementation="css">
        <Drawer variant="temporary" anchor={"right"} open={this.state.mobileOpen} classes={{
            paper: classes.drawerPaper
          }} onClose={this.handleDrawerToggle} >
          <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.closeButtonDrawer}>
            <Close/>
          </IconButton>
          <div className={classes.appResponsive}>{links("notsmall")}</div>
        </Drawer>
      </Hidden>
    </AppBar>);
  }
}

AppHeader.defaultProp = {
  color: "white"
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(AppHeader);
