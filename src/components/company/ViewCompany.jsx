import Button from "@material-ui/core/Button";
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


class ViewCompany extends Component {
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
        this.name = this.props.name;
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
        //Retrieve company properties

        fetch("/company/" + this.name, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                if (json.data.code === 200) {
                    this.setState({
                        name: json.data.company_data_display.name,
                        link: json.data.company_data_display.link ? json.data.company_data_display.link : "",
                        category: json.data.company_data_display.category,
                        causes: json.data.company_data_display.company_cause,
                        logo: json.data.company_data_display.logo,
                        address_line_1: json.data.company_data_display.address_line_1,
                        address_line_2: json.data.company_data_display.address_line_2,
                        state: json.data.company_data_display.state,
                        city: json.data.company_data_display.city,
                        country: json.data.company_data_display.country,
                        zip_code: json.data.company_data_display.zip_code
                    })
                }
            })
            .catch(error => console.log("error caught", error));

    }

    handleClick = () => {
        this.props.history.push({
            pathname: '/company',
            state: {
                // id: this.props.id,
                // //delete everything under this
                name: this.props.name,
                category: this.props.category,
                cause: this.props.cause,
                link: this.props.link,
                causes: this.props.causes,
                categories: this.props.categories
            }
        });
    }


    /*
      Based on company user
    */


    render() {
        // const { show_input } = this.state;
        const {
            classes,
        } = this.props;
        return (
            <Grid
                style={{ padding: 10 }}
                container
                justify="center"
                spacing={8}>
                <Grid style={{ textAlign: 'center' }} item xs={12}>
                    <form style={{
                        display: "flex",
                        width: "50%",
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        flexDirection: "column"
                    }}
                        noValidate
                        autoComplete="off"
                    >
                        <img src={"data:image/png;base64, " + this.state.logo}
                            style={{ marginRight: 'auto', marginLeft: 'auto', objectFit: "fill" }}
                            alt={this.state.name}
                            height="300px"
                            width="300px" />

                        <TextField
                            id="standard-name"
                            label="Company Name"
                            readOnly
                            value={this.state.name}
                            //   onChange={this.handleChange("name")}
                            margin="normal" />
                        <TextField
                            id="standard-name"
                            label="Company Link"
                            readOnly
                            value={this.state.link}
                            //   onChange={this.handleChange("link")}
                            margin="normal" />
                        <TextField
                            id="standard-name"
                            label="Company Category"
                            readOnly
                            value={this.state.category}
                            //   onChange={this.handleChange("category")}
                            margin="normal" />
                        {/* <TextField
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
            <br></br> */}
                        <FormControl>
                            <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
                            <Select
                                multiple
                                value={this.state.causes}
                                // onChange={this.handleChange("causes")}
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
                            readOnly
                            // className={classes.textField}
                            value={this.state.address_line_1}
                            //   onChange={this.handleChange("address_line_1")}
                            margin="normal" />
                        <br></br>

                        <TextField
                            id="address_line_2"
                            label="Address Line2"
                            readOnly
                            // className={classes.textField}
                            value={this.state.address_line_2}
                            //   onChange={this.handleChange("address_line_2")}
                            margin="normal" />
                        <br></br>

                        <TextField
                            id="city"
                            label="City"
                            readOnly
                            // className={classes.textField}
                            value={this.state.city}
                            //   onChange={this.handleChange("city")}
                            margin="normal" />
                        <br></br>

                        <TextField
                            id="state"
                            label="State"
                            readOnly
                            // className={classes.textField}
                            value={this.state.state}
                            //   onChange={this.handleChange("state")}
                            margin="normal" />
                        <br></br>

                        <TextField
                            id="country"
                            label="Country"
                            readOnly
                            // className={classes.textField}
                            value={this.state.country}
                            //   onChange={this.handleChange("country")}
                            margin="normal" />
                        <br></br>

                        <TextField
                            id="zip_code"
                            label="Zip Code"
                            readOnly
                            // className={classes.textField}
                            value={this.state.zip_code}
                            //   onChange={this.handleChange("zip_code")}
                            margin="normal" />
                        <br></br>


                    </form>
                    <Button onClick={this.props.history.goBack}>Back</Button>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(ViewCompany);
