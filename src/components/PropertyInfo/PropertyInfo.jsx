import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

// @material-ui/core components
import TableBody from "@material-ui/core/Table";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class PropertyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.state.name}</TableCell>
      </TableRow>
    );
  }
}

export default withRouter(PropertyInfo);
