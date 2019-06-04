import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, useTheme } from '@material-ui/core/styles';

class AddProperty extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
    }
    this.submit = this.handleSubmit.bind(this)
  }

  handleSubmit = () => {
    fetch("/admin/property/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
      })
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200){
          console.log("success");
          window.location.reload();
        }})
      .catch(error => console.log("Error found", error));
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };

  render(){
    return(
      <form style={{
        display:"flex", 
        width: "50%",
          flexDirection: "column"}} 
          noValidate 
          autoComplete="off"
        >
        <TextField 
          id="standard-name"
          label="Property Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"/>
        <Button onClick={this.submit}>
          Submit
        </Button>
      </form>
    )
  }
}

export default AddProperty;
