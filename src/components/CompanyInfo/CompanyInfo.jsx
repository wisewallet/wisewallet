import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

// @material-ui/core components
import TableBody from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class CompanyInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img
            src={"data:image/png;base64, " + this.props.logo}
            style={{ objectFit: "fill" }}
            alt={this.props.name}
            height="50px"
            width="50px"
          />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell> {this.props.category} </TableCell>
        <TableCell> {this.props.cause.toString()} </TableCell>
        <TableCell>
          {" "}
          <a style={{ color: "blue" }} href={this.props.link} target="_blank">
            {" "}
            {this.props.link}
          </a>{" "}
        </TableCell>
      </TableRow>
    );
  }
}

export default withRouter(CompanyInfo);
