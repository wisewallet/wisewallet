import {
  container,
  title,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

const landingPageStyle = {
  container: {
    color: "#FFFFFF",
    //flex:1, 
    //justifyContent: 'center',
    //alignItems:'center',
    ...container,
    zIndex: "2"
  
  },
  title: {
    ...title,
    display: "inline-block",
    fontFamily: "Gill Sans",
    position: "static",
    margin: 0,
    //marginTop: 0,
    //minHeight: "32px",
    //justifyContent: "center",
    //alignItems: "center",
    //textAlignVertical:"center",
    marginTop: "5px",
    marginLeft: "56px",
    color: "#000000",
    fontWeight: "0",
    textDecoration: "none",
    textAlign: "left"
  },
  subtitle: {
    fontSize: "1.313rem",
    fontFamily: "Helvetica",
    color: "#000000",
    //maxWidth: "500px",
    position: "static",
    marginLeft: "56px",
    marginTop: "15px",
    textAlign:"left"
    //margin: "10px auto 0"
  },
  landButton: {
    backgroundColor: "#FFFFFF",
    color: "#99cc99",
    borderStyle: "solid",
    borderColor: "#99cc99",
    borderWidth: "medium",
    position: "static",
    marginLeft: "56px"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    //fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "fixed",
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
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};

export default landingPageStyle;
