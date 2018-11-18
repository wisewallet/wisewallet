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
        <h2 className={classes.title}>What We Do</h2>
        <h4 className={classes.description}>
          WiseWallet is a first of its kind impact spending tool designed to inform users about how their spending aligns to their values. What if we as consumers knew exactly what we were supporting with each purchase? Our free application delivers this transparency through personalized scores based on your impact on people, the planet, corporate policy and politics quantified through your everyday purchases. By bridging the information gap, we enable you to take action with each transaction.</h4>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What is my Total Impact Score?</h2>
        <h4 className={classes.description}>
          Your Total Impact Score is a combination of environmental, social, and corporate governance ratings. All WiseWallet scores are based on a quantitative score on a scale of 1-100.
        </h4>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my Planet score?</h2>
        <h4 className={classes.description}>
          Resource use, emissions, innovation, climate change/carbon, green energy use, and more.
        </h4>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my People score?</h2>
        <h4 className={classes.description}>
          Human rights, diversity and inclusion, workforce treatment and safety, community outreach, product responsibility, animal welfare, and more.
        </h4>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What factors are included in my Policy score?</h2>
        <h4 className={classes.description}>
          Management structure and compensation, board diversity, anti-corruption policies, employee relations, Corporate Social Responsibility strategy, and more.
        </h4>
      </GridItem>
      <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
        <h2 className={classes.title}>What is my Politics score?</h2>
        <h4 className={classes.description}>
          WiseWallet leverages the nonpartisan non-profit Center for Responsive Politics to track the effects of money and lobbying on elections and public policy. Any organization whose PACs, individual members, employees, owners, and those individuals’ immediate families who combined donated in excess of 60% of the organizations’ total donations to Republican or Democratic candidates in 2018 is deemed “Conservative” or “Liberal”, respectively.</h4>
      </GridItem>
    </GridContainer>
  </div>);
}

export default withStyles(servicesStyle)(SectionServices);
