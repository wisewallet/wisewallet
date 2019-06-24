import React, { Component } from "react";
import Footer from "components/Footer/Footer.jsx";
import CustomButton from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class WebFooter extends Component{
  render(){
    return(
        <Footer content={<div>
          <CustomButton justIcon="justIcon" simple="simple" href="https://twitter.com/mywisewallet" target="_blank" color="twitter">
          <i className="fab fa-twitter"/>
        </CustomButton>
        <CustomButton justIcon="justIcon" simple="simple" href="https://www.facebook.com/mywisewallet" target="_blank" color="facebook">
          <i className="fab fa-facebook-square"/>
        </CustomButton>
        <CustomButton justIcon="justIcon" simple="simple" href="https://www.instagram.com/mywisewallet/" target="_blank" color="instagram">
          <i className="fab fa-instagram"/>
        </CustomButton>
        <GridContainer>
          <GridItem sm={3}>
          </GridItem>
          <GridItem sm={6}>
          <div style={{width: 'auto'}}>
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            <a href="http://www.mywisewallet.com">WiseWallet Inc. </a> 
            All Rights Reserved. </div></GridItem>
        </GridContainer>
      </div>}>
      </Footer>
    )}
}

export default WebFooter;
