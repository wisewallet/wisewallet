import React, { Component } from 'react';
import {Redirect} from "react-router";
import {withRouter} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from '@material-ui/core/styles';

class Company extends Component{
  constructor(props){
    super(props);
    this.state = {
      causelist: [],
      categories: [],
      category: "",
      name: "",
      link: "",
      cause: [],
      logo: "",
    }
    this.id = this.props.id;
    this.submit = this.handleSubmit.bind(this)
    this.delete = this.handleDelete.bind(this);
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

  componentDidMount() {
    //Retrieve list of companies & categories
    fetch("/admin/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200){
          this.getCategories(json.data);
        }
 
      })
      .catch(error => console.log("Caught Error", error));

    //Retrieve list of causes
    fetch("/admin/property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200)
          this.setState({causelist: json.data.property_data});
      })
      .catch(error => console.log("Caught Error", error));

    //Retrieve company properties
    fetch("/admin/company/edit/" + this.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code === 200)
          this.setState({
            name: json.data.name,
            link: json.data.link,
            category: json.data.category,
            cause: json.data.property_name,
            logo: json.data.logo
          }) 
        console.log(this.state);
      })
      .catch(error => console.log("error caught", error));
    }

  /*
   * Functions for handling parsing the data retrieved from API calls
   */

  getCategories = (data) => { 
    var categories = data.company_data.map(info => info.company_category);

    //filters out categories to remove duplicates
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    this.setState({categories: categories});
  }

  handleSubmit = () => {
    console.log(this.state);
    const formData = this.createFormData();

    fetch("/admin/company/edit/" + this.id, {
      method: "POST",
      body: formData
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

  handleDelete = () => {
    const id = this.id;
    fetch("/admin/company/delete/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code == 200){
          this.props.history.push("/companyInfo")
        }
      })
      .catch(error => console.log("Error caught", error));
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };

  handleUploadFile = (event) => {
    this.setState({logo: event.target.files[0]});
  }

  createFormData = () => {
    var formData = new FormData();

    formData.append("category", this.state.category);
    formData.append("name", this.state.name);
    formData.append("link", this.state.link);
    this.state.cause.map(cause => formData.append("property_list", cause));
    if(this.state.logo instanceof File){
      formData.append('logo', this.state.logo);
    }
    return formData;
  }

  render(){
    return(
      <Grid
        style={{padding: 10}}
        container
        justify="center"
        spacing={3}>
        <Grid style={{textAlign: 'center'}} item xs={12}>
      <form style={{
        display:"flex", 
        width: "50%",
        marginRight: 'auto',
        marginLeft: 'auto',
          flexDirection: "column"}} 
          noValidate 
          autoComplete="off"
        >
          <img src={"data:image/png;base64, " + this.state.logo}
          style={{marginRight: 'auto', marginLeft: 'auto', objectFit: "fill"}}
          alt={this.state.name} 
          height="300px" 
          width="300px"/>
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
          id="standard-name"
          label="Company Category"
          value={this.state.category}
          onChange={this.handleChange("category")}
          margin="normal"/>
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
              <MenuItem key={cause.property_id} value={cause.property_name} >
                {cause.property_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <input
          style={{marginRight: "auto", marginLeft: "auto"}}
          accept="image/*"
          id="outlined-button-file"
          type="file"
          onChange={this.handleUploadFile}/>
        <Grid
            style={{padding: 10}}
            container
            justify="center"
            spacing={3}>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button variant="outlined"
                onClick={this.submit}>
                Edit
              </Button>
            </Grid>
            <Grid style={{textAlign: 'center'}} item xs={3}>
              <Button variant="outlined"
                color="secondary"
                onClick={this.delete}>
                Delete
              </Button>
            </Grid>
        </Grid>
      </form>
    </Grid>
    </Grid>
    )
  }
}

export default withRouter(Company);
