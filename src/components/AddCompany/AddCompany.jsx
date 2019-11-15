import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';


class AddCompany extends Component{
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
        if(json.data.code === 200){
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
        if(json.data.code === 200)
          this.setState({causelist: json.data.property_data});
      })
      .catch(error => console.log("Caught Error", error));
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

  createFormData = () => {
    var formData = new FormData();

    formData.append("category", this.state.category);
    formData.append("name", this.state.name);
    formData.append("link", this.state.link);
    this.state.cause.map(cause => formData.append("property_list", cause));
    formData.append('logo', this.state.logo);
    return formData;
  }

  handleSubmit = () => {
    var formData = this.createFormData();

    fetch("/admin/company/add", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(json => {
        if(json.data.code === 200){
          window.location.reload();
        }})
      .catch(error => console.log("Error found", error));
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };

  handleUploadFile = (event) => {
    this.setState({logo: event.target.files[0]});
  }

  render(){
    return(
      <form style={{
        marginLeft: "auto",
        marginRight: "auto",
        display:"flex", 
        width: "50%",
          flexDirection: "column"}} 
          noValidate 
          autoComplete="off"
        >
        <TextField 
          id="name"
          label="Company Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"/>
        <TextField
          id="link"
          label="Company Link"
          value={this.state.link}
          onChange={this.handleChange("link")}
          margin="normal"/>
        <TextField
          id="category"
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
        <Button onClick={this.submit}>
          Submit
        </Button>
      </form>
    )
  }
}

export default AddCompany;
