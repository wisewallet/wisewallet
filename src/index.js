import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import indexRoutes from "./routes/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <NavBar></NavBar>
    {indexRoutes.map((prop, key) => {
      return (
        <div>
          <Route
            exact
            path={prop.path}
            key={key}
            component={prop.component}
          ></Route>
        </div>
      );
    })}
    <Footer />
    <div
      class="col-sm-12"
      style={{
        backgroundColor: "#f6fdf6",
        paddingLeft: "10%",
        textAlign: "left",
        paddingBottom: "1%"
      }}
    >
      <h8>Illustration by Wonhyoung Choi</h8> <br />
      <h8>© Copyright 2020 WiseWallet. All rights reserved.</h8>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
