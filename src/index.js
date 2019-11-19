import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import indexRoutes from "./routes/index.jsx";
import WebFooter from "components/WebFooter/WebFooter.jsx";

import "./assets/scss/material-kit-pro-react.css?v=1.1.0";

var hist = createBrowserHistory();

const THEME = createMuiTheme({
   typography: {
    "fontFamily": "gotham-regular",
    "fontColor": "#031D44",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>
</MuiThemeProvider>,
  document.getElementById("root")
);
