import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const {classes} = props;
  return (<div className={classes.services}>
    <GridContainer>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>Our Mission</h2>
        <h5 className={classes.description}>
          We believe that we as consumers should be aware of the policies and actions of companies with whom we spend our money with. If we support companies who are doing what is right for their employees, their communities, and the environment, this positive reinforcement can make the world a better place with each dollar we spend.
        </h5>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What We Do</h2>
        <h5 className={classes.description}>
          WiseWallet provides a Total Impact Score based on your daily spending. By collecting and analyzing third party research, we procure the most accurate environmental, social, and corporate governance ratings of companies. These ratings are matched to your daily transactions to provide your custom score. WiseWallet aims to make consumers aware of their impact and hopes to empower our users to spend with companies that are environmentally friendly, socially progressive, and ethical.
        </h5>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What is my Total Impact Score?</h2>
        <h5 className={classes.description}>
          Your Total Impact Score is a combination of environmental, social, and corporate governance ratings. All WiseWallet scores are based on a quantitative score on a scale of 1-100.
        </h5>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my environmental score?</h2>
        <h5 className={classes.description}>
          Resource use, emissions, innovation, climate change/carbon, green energy use, and more.
        </h5>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my social score?</h2>
        <h5 className={classes.description}>
          Human rights, diversity and inclusion, workforce treatment and safety, community outreach, product responsibility, animal welfare, and more.
        </h5>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my governance score?</h2>
        <h5 className={classes.description}>
          Management structure and compensation, board diversity, anti-corruption policies, employee relations, Corporate Social Responsibility strategy, and more.
        </h5>
      </GridItem>
    </GridContainer>
  </div>);
}

export default withStyles(servicesStyle)(SectionServices);
