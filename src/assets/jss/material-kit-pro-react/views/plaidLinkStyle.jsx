import { container, cardTitle } from "assets/jss/material-kit-pro-react.jsx";

import customCheckboxRadioSwitchStyle from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx";

import image from "assets/img/thankyou.jpg"
const plaidLinkStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  },
  pageHeader: {
    minHeight: "100vh",
    maxHeight: "1600px",
    height: "auto",
    display: "inherit",
    position: "relative",
    fontFamily:"Helvetica",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "assets/img/thankyou.jpg"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  cardSignup: {
   // borderRadius: "6px",
    borderStyle: "dotted",
    borderColor: "#99cc99",
    borderWidth: "medium",
    //boxShadow:
     // "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);",
    marginBottom: "100px",
    padding: "40px 0px"

  },
  cardTitle: {
    //...cardTitle,
    fontFamily: "Helvetica",
    textDecoration: "none",
    textAlign: "center",
    marginBottom: "0.75rem",
    fontSize: "large"
  },
  ...customCheckboxRadioSwitchStyle,
  socials: {
    marginTop: "0",
    position: "absolute",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  textCenter: {
    textAlign: "center"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: "#495057"
  },
  form: {
    margin: "0"
  },
  infoArea: {
    padding: "0px 0px 20px !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};

export default plaidLinkStyle;
