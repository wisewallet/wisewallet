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

class Company extends Component{
  constructor(props){
    super(props);
    this.state = this.props;
    this.submit = this.handleSubmit.bind(this)
    this.ITEM_HEIGHT = 48;
    this.ITEM_PADDING_TOP = 8;
    this.MenuProps = {
      PaperProps: {
        style: {
          maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

  }

  handleSubmit = () => {
    window.location.reload();
    fetch("http://test.mywisewallet.com/admin/company/edit/" + this.id, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: this.state.name,
        category: this.state.category,
        link: this.state.link,
        property_list: this.state.causes
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
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
          label="Company Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"/>
        <TextField
          id="standard-name"
          label="Company Link"
          value={this.state.link}
          onChange={this.handleChange("link")}
          margin="normal"/>
        <TextField
          id="standard-select-category"
          select
          label="Company Category"
          value={this.state.category}
          onChange={this.handleChange("category")}
          SelectProps={{
            MenuProps: {
              width: 200
            },
          }}
          margin="normal">
          {this.state.categories.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
          <Select
            multiple
            value={this.state.cause}
            onChange={this.handleChange("cause")}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div style={{display:"flex", flexWrap:"wrap"}}>
                {selected.map(value => (
                  <Chip key={value} label={value} style={{margin:2}} />
                ))}
              </div>
            )}
            MenuProps={this.MenuProps}
          >
            {this.state.causelist.map(cause => (
              <MenuItem key={cause} value={cause} >
                {cause}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={this.submit}>
          Submit
        </Button>
      </form>
    )
  }
}

export default Company;
