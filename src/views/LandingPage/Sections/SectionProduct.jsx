import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InsertChart from "@material-ui/icons/InsertChart";
import List from "@material-ui/icons/List";
import Loyalty from "@material-ui/icons/Loyalty";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";
import plaid from "assets/img/plaid-logo-horizontal-RGB.png";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Personal Impact Score"
                description="Get personal scores based on your impact on people, the planet, and policy through your transactions."
                icon={InsertChart}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Suggested Alternatives"
                description="WiseWallet curates recommendations to guide you towards more sustainable and ethical purchases within your budget."
                icon={List}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Rewards"
                description="Benefit from discounts and giveaways through our responsible business partners for exemplary performance. It’s a win-win!"
                icon={Loyalty}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8}>
              <InfoArea
                title="Safe. Secure."
                description="At WiseWallet, we take security very seriously. We only collect the necessary transactional data to provide you with relevant scores and ratings. Your information is secured using AES-256 bank-level encryption."

                icon={VerifiedUser}
                iconColor="info"
                vertical
              />
              </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
