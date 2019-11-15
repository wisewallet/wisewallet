import React, { Component } from "react";
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class WebFooter extends Component{
  constructor(props){
    super(props);
    this.style = {
      backgroundColor: "#F8F8F8",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    }
    this.phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
  }
  render(){
    return(
      <div>
        <div style={this.phantom}/>
        <Footer style={this.style} content={<div>
          <CustomButton justIcon={true} simple={true} href="https://twitter.com/mywisewallet" target="_blank" rel="noopener noreferrer" color="twitter">
          <i className="fab fa-twitter"/>
        </CustomButton>
        <CustomButton justIcon={true} simple={true} href="https://www.facebook.com/mywisewallet" target="_blank" rel="noopener noreferrer" color="facebook">
          <i className="fab fa-facebook-square"/>
        </CustomButton>
        <CustomButton justIcon={true} simple={true} href="https://www.instagram.com/mywisewallet/" target="_blank" rel="noopener noreferrer" color="instagram">
          <i className="fab fa-instagram"/>
        </CustomButton>
        <GridContainer>
          <GridItem sm={3}>
          </GridItem>
          <GridItem sm={6}>
          <div style={{width: 'auto'}}>
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            <a href="https://www.mywisewallet.com">WiseWallet Inc. </a> 
            All Rights Reserved. </div></GridItem>
        </GridContainer>
      </div>}>
      </Footer>
    </div>
    )}
}

export default WebFooter;
