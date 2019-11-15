import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';

// @material-ui/core components
import TableBody from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class PropertyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClick = this.handleClick.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  deleteValue = () => {
    const id = this.props.id;
    fetch("/admin/property/delete/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {

        if (json.data.code === 200) {

          window.location.reload();
        }
      })
      .catch(error => console.log("Error caught", error));
  };

  handleClick = () => {
    fetch('/admin/property/edit/' + this.props.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(json => {

        if (json.data.code === 200) {
        }
      })
      .catch(error => console.log("Error caught", error));
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <TextField
            id="standard-name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal" />
        </TableCell>
        <TableCell>
          <Button variant="contained" onClick={this.handleClick}>
            Save Changes
        </Button>
        </TableCell>
        <TableCell>
          <Button variant="contained" onClick={this.deleteValue} color="secondary" >
            Delete
        </Button>
        </TableCell>
      </TableRow>
    )
  }

}

export default withRouter(PropertyInfo)
