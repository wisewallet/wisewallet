import React, { Component } from "react";
import { Redirect } from "react-router";
import NavBar from "components/NavBar/NavBar.jsx";
import ViewCompany from "components/company/ViewCompany.jsx";

class CompanyDetail extends Component {
    constructor(props) {
        super(props);

        this.id = sessionStorage.getItem("userID");
        this.name = this.props.location.state.name;

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }

    render() {
        if (!this.id) {
            return (<Redirect to="/login" />);
        }
        else {
            return (
                <div>
                    <NavBar />
                    <div style={{
                        marginLeft: "10px"
                    }}>
                        <h3>View Company Info </h3>
                        <ViewCompany name={this.name} />
                    </div>
                    <footer> Copyright © 2019 WiseWallet Inc. All Rights Reserved.</footer>
                </div>
            )
        }
    }
}

export default CompanyDetail
