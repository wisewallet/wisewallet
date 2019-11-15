import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";


// core components
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import WebFooter from "components/WebFooter/WebFooter.jsx";


import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

// utility functions
import { validateCompanySignup } from "utils/SignupPage/Verification.jsx"

// styling & images 
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

class SignUpCompany extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //Keep track of status
            error: false,
            errorMessage: "",
            success: false,
            show_input: false,
            category_temp: "",

            //Company signup info
            email: "",
            password: "",
            company_name: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            country: "",
            zip_code: "",
            link: "",
            causelist: [],
            categories: [],
            causes: [],
            category: [],
            logo: ""
        }
        this.onSignUp = this.onSignUp.bind(this);
    }


    /*
     * Functions for handling parsing the data retrieved from API calls
     */




    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        //Retrieve list of companies & categories
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
    }

    //Handles changes in the form 
    /*
     * Functions for handling state changes
     */
    handleChange = name => event => {
        if (name === "category" && event.target.value === "Other")
            this.setState({ show_input: true })
        this.setState({ [name]: event.target.value });
    };



    handleClose = () => {
        this.setState({ error: false });
    }
    handleUploadFile = (event) => {
        // this.setState({ logo:  event.target.files[0]});
        var reader = new FileReader();

        var file = event.target.files[0];
        var self = this;
        reader.onload = function (upload) {
            // self.setState({ logo:  upload.target.result});
            self.setState({ logo: upload.target.result.split(";")[1].slice(7) });
        };
        reader.readAsDataURL(file);

    }


    onSignUp = () => {
        const results = validateCompanySignup(this.state)
        this.setState({
            error: results.error,
            errorMessage: results.errorMessage,
            success: results.success
        });
        var info = {
            "email": this.state.email,
            "password": this.state.password,
            "company_name": this.state.company_name,
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

        if (results.success) {
            fetch("/company_users/register", {
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
                        this.props.history.push('/');
                    }
                    if (json.data.code === 400) {
                        alert("This email already exists");
                    }
                })
                .catch(error => console.log("error thrown", error));
        }
    }

    render() {
        const { show_input } = this.state;
        const {
            classes,
        } = this.props;
        return (<div>
            <header style={{ backgroundColor: "#031D44" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="/">
                                <h2>
                                    <img src={require("assets/img/logos/white-logo.png")}
                                        height="42"
                                        width="42"></img>
                                    <b>WiseWallet</b></h2>
                            </Link>
                            <div className="simpborder"></div>
                            <p>Put your money where your mind is.</p>
                        </div>
                    </div>
                </div>
            </header>
            <center>
                <h2><b>Company Sign Up</b></h2>
                <div className="simpborder"></div>
                <form
                    autoComplete='off'>
                    <TextField
                        id="companyName"
                        label="Company Name"
                        required
                        className={classes.textField}
                        value={this.state.company_name}
                        onChange={this.handleChange("company_name")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="email"
                        label="Email"
                        required
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="password"
                        label="Password"
                        required
                        className={classes.textField}
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                        autoComplete="current-password"
                        margin="normal" />
                    <br></br>

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
                        className={classes.textField}
                        value={this.state.category_temp}
                        onChange={this.handleChange("category_temp")}
                        margin="normal" /> : ""
                    }
                    <br></br>
                    <FormControl>
                        <InputLabel htmlFor="select-multiple-chip">Company Causes</InputLabel>
                        <Select
                            style={{ minWidth: 200, maxWidth: 800 }}
                            multiple
                            value={this.state.causes}
                            onChange={this.handleChange("causes")}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div style={{ fontSize: 20, display: "flex", flexWrap: "wrap" }}>
                                    {selected.map(value => (
                                        <Chip
                                            key={value}
                                            label={value}
                                            style={{ margin: 2 }} />
                                    ))}
                                </div>
                            )}
                            MenuProps={this.MenuProps}>
                            {this.state.causelist.map(cause => (
                                <MenuItem style={{ fontSize: 20 }} key={cause.property_id} value={cause.property_name}>
                                    {cause.property_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br></br>

                    <TextField
                        id="address_line_1"
                        label="Address Line1"
                        required
                        className={classes.textField}
                        value={this.state.address_line_1}
                        onChange={this.handleChange("address_line_1")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="address_line_2"
                        label="Address Line2"
                        className={classes.textField}
                        value={this.state.address_line_2}
                        onChange={this.handleChange("address_line_2")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="city"
                        label="City"
                        required
                        className={classes.textField}
                        value={this.state.city}
                        onChange={this.handleChange("city")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="state"
                        label="State"
                        required
                        className={classes.textField}
                        value={this.state.state}
                        onChange={this.handleChange("state")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="country"
                        label="Country"
                        required
                        className={classes.textField}
                        value={this.state.country}
                        onChange={this.handleChange("country")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="zip_code"
                        label="Zip Code"
                        required
                        className={classes.textField}
                        value={this.state.zip_code}
                        onChange={this.handleChange("zip_code")}
                        margin="normal" />
                    <br></br>

                    <TextField
                        id="link"
                        label="Link"
                        required
                        className={classes.textField}
                        value={this.state.link}
                        onChange={this.handleChange("link")}
                        margin="normal" />
                    <br></br>

                    Choose logo:<input
                        style={{ marginRight: "auto", marginLeft: "auto" }}
                        accept="image/*"
                        id="outlined-button-file"
                        type="file"
                        onChange={this.handleUploadFile} />

                </form>
                <Button
                    color="primary"
                    onClick={this.onSignUp}
                    size="medium">
                    Sign up
        </Button>
            </center>

            <Snackbar anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
                open={this.state.error}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message={<span id="message-id">{this.state.errorMessage}</span>}
            >
            </Snackbar>
            <WebFooter />
        </div>);
    }
}

export default withStyles(signupPageStyle)(SignUpCompany);
