import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      causelist: [],
      categories: [],
      name: "",
      link: "",
      cause: [],
      logo: "",
      company_name: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      link: "",
      categories: [],
      causes: [],
      category: [],
      category_temp: ""
    }
    this.id = this.props.id;
    this.user_is_company = sessionStorage.getItem("isCompany");

    this.submit = this.handleSubmit.bind(this);
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
    if (this.user_is_company) {
      fetch("/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200) {
            let category_data = json.data.category_data;
            category_data.push("Other");
            this.setState({ categories: json.data.category_data });
          }

        })
        .catch(error => console.log("Caught Error", error));

      //Retrieve list of causes
      fetch("/property", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200)
            this.setState({ causelist: json.data.property_data });
        })
        .catch(error => console.log("Caught Error", error));

      //Retrieve company properties
      fetch("company_users/company", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200) {
            this.setState({
              name: json.data.company_data.name,
              link: json.data.company_data.link ? json.data.company_data.link : "",
              category: json.data.company_data.category,
              causes: json.data.company_data.company_cause,
              logo: json.data.company_data.logo,
              address_line_1: json.data.company_data.address_line_1,
              address_line_2: json.data.company_data.address_line_2,
              state: json.data.company_data.state,
              city: json.data.company_data.city,
              country: json.data.company_data.country,
              zip_code: json.data.company_data.zip_code
            })
          }
        })
        .catch(error => console.log("error caught", error));

    }
    else {
      fetch("/admin/company", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200) {
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
          if (json.data.code === 200)
            this.setState({ causelist: json.data.property_data });
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
          if (json.data.code === 200) {
            console.log(json.data);
            this.setState({
              name: json.data.company_data.name,
              link: json.data.company_data.link ? json.data.company_data.link : "",
              category: json.data.company_data.category,
              causes: json.data.company_data.company_cause,
              logo: json.data.company_data.logo,
              address_line_1: json.data.company_data.address_line_1,
              address_line_2: json.data.company_data.address_line_2,
              state: json.data.company_data.state,
              city: json.data.company_data.city,
              country: json.data.company_data.country,
              zip_code: json.data.company_data.zip_code
            })
          }
        })
        .catch(error => console.log("error caught", error));
    }

  }


  /*
   * Functions for handling parsing the data retrieved from API calls
   */
  getCategoriesCompanyUsers = (data) => {
    var categories = data.category_data;
    categories.push("Other")
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    this.setState({ categories: categories });
  }
  getCategories = (data) => {
    var categories = data.company_data.map(info => info.company_category);


    //filters out categories to remove duplicates
    var seen = {};
    categories = categories.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
    this.setState({ categories: categories });
  }



  handleSubmit = () => {

    // TODO: everything should be json;
    if (this.user_is_company) {
      var info = {
        "company_name": this.state.name,
        "category": this.state.category_temp !== "" ? this.state.category_temp : this.state.category,
        "other_category": this.state.category_temp !== "" ? true : false,
        "causes": this.state.causes,
        "address_line_1": this.state.address_line_1,
        "address_line_2": this.state.address_line_2,
        "city": this.state.city,
        "state": this.state.state,
        "country": this.state.country,
        "zip_code": this.state.zip_code,
        "link": this.state.link,
        "logo": this.state.logo,
      }

      fetch("/company_users/company/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(info)
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200) {
            this.props.history.push('/company_users/company')
          }
        })
        .catch(error => console.log("Error found", error));
    } else {
      const formData = this.createFormData();
      fetch("/admin/company/edit/" + this.id, {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(json => {
          if (json.data.code === 200) {
            window.location.reload();
          }
        })
        .catch(error => console.log("Error found", error));
    }
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
        if (json.data.code === 200) {
          this.props.history.push("/companyInfo")
        }
      })
      .catch(error => console.log("Error caught", error));
  }

  handleChange = name => event => {
    if (name === "category" && event.target.value === "Other")
      this.setState({ show_input: true })
    this.setState({ [name]: event.target.value });
  };

  handleUploadFile = (event) => {
    this.setState({ logo: event.target.files[0] });
  }

  handleUploadFileCompany = (event) => {
    // this.setState({ logo:  event.target.files[0]});
    var reader = new FileReader();

    var file = event.target.files[0];
    var self = this;

    reader.onload = function (upload) {
      self.setState({ logo: upload.target.result.split(";")[1].slice(7) });
    };
    reader.readAsDataURL(file);

  }

  createFormData = () => {
    var formData = new FormData();

    formData.append("category", this.state.category);
    formData.append("name", this.state.name);
    formData.append("link", this.state.link);
    this.state.cause.map(cause => formData.append("property_list", cause));
    formData.append('logo', this.state.logo);
    formData.append("address_line_1", this.state.address_line_1);
    formData.append("address_line_2", this.state.address_line_2);
    formData.append("city", this.state.city);
    formData.append("state", this.state.state);
    formData.append("country", this.state.country);
    formData.append("zip_code", this.state.zip_code);
    return formData;
  }

  /*
    Based on company user
  */


  render() {
    const { show_input } = this.state;

    return (
      <Grid
        style={{ padding: 10 }}
        container
        justify="center"
        spacing={0}>
        <Grid style={{ textAlign: 'center' }} item xs={8}>
          <form style={{
            display: "flex",
            width: "50%",
            marginRight: 'auto',
            marginLeft: 'auto',
            flexDirection: "column"
          }}
            noValidate
            autoComplete="on"
          >
            <img src={"data:image/png;base64, " + this.state.logo}
              style={{ marginRight: 'auto', marginLeft: 'auto', objectFit: "fill" }}
              alt={this.state.name}
              height="300px"
              width="300px" />
            <input
              style={{ marginRight: "auto", marginLeft: "auto" }}
              accept="image/*"
              id="outlined-button-file"
              type="file"
              onChange={this.user_is_company ? this.handleUploadFileCompany : this.handleUploadFile} />
            <TextField
              id="standard-name"
              label="Company Name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal" />
            <TextField
              id="standard-name"
              label="Company Link"
              value={this.state.link}
              onChange={this.handleChange("link")}
              margin="normal" />
            <TextField
              id="standard-select-category"
              fontSize="40"
              select
              style={{ minWidth: 200 }}
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
                <MenuItem style={{ fontSize: 20 }} key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <br></br>

            {show_input ? <TextField
              id="category"
              label="Please Specify category"
              required
              // className={classes.textField}
              value={this.state.category_temp}
              onChange={this.handleChange("category_temp")}
              margin="normal" /> : ""
            }
            <br></br>
            <FormControl>
              <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
              <Select
                multiple
                value={this.state.causes}
                onChange={this.handleChange("causes")}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.map(value => (
                      <Chip key={value} label={value} style={{ margin: 2 }} />
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
            <TextField
              id="address_line_1"
              label="Address Line1"
              required
              // className={classes.textField}
              value={this.state.address_line_1}
              onChange={this.handleChange("address_line_1")}
              margin="normal" />
            <br></br>

            <TextField
              id="address_line_2"
              label="Address Line2"
              // className={classes.textField}
              value={this.state.address_line_2}
              onChange={this.handleChange("address_line_2")}
              margin="normal" />
            <br></br>

            <TextField
              id="city"
              label="City"
              required
              // className={classes.textField}
              value={this.state.city}
              onChange={this.handleChange("city")}
              margin="normal" />
            <br></br>

            <TextField
              id="state"
              label="State"
              required
              // className={classes.textField}
              value={this.state.state}
              onChange={this.handleChange("state")}
              margin="normal" />
            <br></br>

            <TextField
              id="country"
              label="Country"
              required
              // className={classes.textField}
              value={this.state.country}
              onChange={this.handleChange("country")}
              margin="normal" />
            <br></br>

            <TextField
              id="zip_code"
              label="Zip Code"
              required
              // className={classes.textField}
              value={this.state.zip_code}
              onChange={this.handleChange("zip_code")}
              margin="normal" />
            <br></br>

            <Grid
              style={{ padding: 10 }}
              container
              justify="flex-start"
              spacing={0}>
              <Grid style={{ textAlign: 'center' }} item xs={3}>
                <Button variant="outlined"
                  onClick={this.submit}>
                  Edit
              </Button>
              </Grid>
              {this.user_is_company ? <Grid style={{ textAlign: 'center' }} item xs={6}>
                <Button variant="outlined"
                  color="secondary"
                  onClick={this.delete}>
                  Delete
              </Button>
              </Grid> : ""}

            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={3}>
              <Button variant="outlined"
                onClick={this.props.history.goBack}>Back</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Company);
