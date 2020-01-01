import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "../components/SearchBar.jsx";
import Button from "react-bootstrap/Button";
import { MDBBtn, MDBIcon, MDBCol, MDBFormInline, MDBInput } from "mdbreact";

import FadeInSection from "../components/FadeInSection";
import { FormControl, FormGroup, Form } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.section1 = React.createRef();
    this.state = {
      filter: "",
      companies: [],
      categories: {},
      causes: {},
      checkedValues: [],
      toggle: false,
      filterNum: 12
    };
    this.filterClick = this.filterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCause = this.handleCause.bind(this);
  }
  componentDidMount() {
    this.section1.current.scrollIntoView({ behavior: "smooth" });
    document.body.scrollTop = 0;
    fetch("/admin/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(async json => {
        if (json.data.code == 200) {
          await this.setState({ companies: json.data.company_data });
          await this.setState({ checkedValues: json.data.company_data });
        }
        const categories = this.state.companies.map(company => {
          return company.company_category;
        });
        let uniqueCategories = [...new Set(categories)];
        const categoriesBool = {};
        uniqueCategories.map(category => {
          categoriesBool[category] = true;
        });
        await this.setState({
          categories: categoriesBool
        });
      })
      .catch(err => console.log("Caught Error", err));

    fetch("/admin/property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(async json => {
        if (json.data.code == 200) {
          const causes = {};
          json.data.property_data.map(property => {
            causes[property.property_name] = true;
          });
          await this.setState({ causes: causes });
        }
      })
      .catch(err => console.log("Caught Error", err));
  }
  updateCheckedValues = () => {
    const trueCauses = Object.keys(this.state.causes).filter(
      cause => this.state.causes[cause] === true
    );
    const trueCategories = Object.keys(this.state.categories).filter(
      cat => this.state.categories[cat] === true
    );
    const filterNum = trueCauses.length + trueCategories.length;
    this.setState({ filterNum: filterNum });
    const checkedValues = this.state.companies.filter(company => {
      let bool = false;
      company.company_cause.map(cause => {
        bool = trueCauses.includes(cause);
      });
      if (bool && trueCategories.includes(company.company_category)) {
        return company;
      }
    });
    this.setState({ checkedValues: checkedValues });
  };
  companyInfo = () => {
    return (
      <div>
        {this.state.checkedValues.length > 0 ? (
          this.state.checkedValues.map(info => (
            <div id="company">
              <a href={info.company_link} style={{ color: "black" }}>
                <FadeInSection>
                  <div id="card" class="row">
                    <div
                      style={{ padding: "0px", paddingTop: "1%" }}
                      class="col-sm-8"
                    >
                      <div class="row">
                        <div
                          class="col-sm-4"
                          style={{ padding: "0px", paddingTop: "1%" }}
                        >
                          <img
                            id="companyLogo"
                            src={"data:image/png;base64, " + info.company_logo}
                          ></img>
                        </div>
                        <div
                          style={{
                            padding: "0px",
                            paddingTop: "1%"
                          }}
                          class="col-sm-8"
                        >
                          <h2>
                            <span>{info.company_name}</span>
                          </h2>
                          <p>Category: {info.company_category}</p>
                        </div>
                      </div>
                    </div>
                    <div id="company-card" class="col-sm-4">
                      <div>
                        <img style={{ width: "50%" }} src="tag.png"></img>
                        {info.company_cause.map(category => (
                          <p>
                            <span>{category}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </a>
            </div>
          ))
        ) : this.state.filterNum > 0 ? (
          <div id="#card" class="row">
            <div class="col-sm-12" style={{ textAlign: "center" }}>
              <div style={{ paddingTop: "10%" }} className="lds-ring">
                <div></div>
              </div>
            </div>
            <div class="col-sm-12" style={{ textAlign: "center" }}>
              <h1 style={{ paddingTop: "10%" }}>Getting our data for you...</h1>
            </div>
          </div>
        ) : (
          <div class="col-sm-6">
            <h1>Sorry, there are no companies matching your search.</h1>
          </div>
        )}
      </div>
    );
  };

  handleCause = async e => {
    const { name } = e.target;
    await this.setState(prevState => ({
      causes: { ...prevState.causes, [name]: !prevState.causes[name] }
    }));
  };

  handleCheck = async e => {
    const { name } = e.target;
    await this.setState(prevState => ({
      categories: {
        ...prevState.categories,
        [name]: !prevState.categories[name]
      }
    }));
  };

  async handleSearch(event) {
    event.preventDefault();
    if (this.state.filter !== "") {
      const checkedValues = this.state.companies.filter(company =>
        company.company_name.split(" ").includes(this.state.filter)
      );
      if (checkedValues.length > 0) {
        await this.setState({ checkedValues: checkedValues });
      } else {
        await this.setState({ checkedValues: this.state.companies });
      }
    } else {
      await this.setState({ checkedValues: this.state.companies });
    }
  }

  handleChange = async event => {
    if (event !== undefined && event.target !== undefined) {
      await this.setState({ filter: event.target.value });
    }
  };

  filterClick() {
    if (this.state.toggle === true) {
      this.updateCheckedValues();
    }
    this.setState({ toggle: !this.state.toggle });
  }

  filterInfo = () => {
    // product based filters
    return (
      <div id="filterRow" class="row">
        <div id="filter" class="col-sm-6">
          <p>
            <span style={{ textDecoration: "underline" }}>
              PRODUCT CATEGORY
            </span>
          </p>

          {Object.keys(this.state.categories).length > 0 ? (
            <form>
              {Object.keys(this.state.categories).map((category, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name={category}
                      checked={this.state.categories[category]}
                      onChange={this.handleCheck}
                    />{" "}
                    <label class="container-checkbox"> {category}</label>
                  </div>
                );
              })}
            </form>
          ) : (
            <div className="lds-ring">
              <div></div>
            </div>
          )}
        </div>
        <div id="filter" class="col-sm-6">
          <p>
            <span style={{ textDecoration: "underline" }}>CAUSES</span>
          </p>
          {Object.keys(this.state.causes).length > 0 ? (
            <form>
              {Object.keys(this.state.causes).map((cause, i) => (
                <div key={i}>
                  <input
                    type="checkbox"
                    name={cause}
                    checked={this.state.causes[cause]}
                    onChange={this.handleCause}
                  />{" "}
                  <label>{cause}</label>
                </div>
              ))}
            </form>
          ) : (
            <div>
              <div className="lds-ring">
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div id="searchRow" class="row">
          <div id="col" class="col">
            <h1 ref={this.section1} style={{ padding: "0px" }}>
              <span
                style={{
                  borderBottom: "3px solid #000",
                  paddingBottom: "0.2%"
                }}
              >
                COMPANY DIRECTORY
              </span>
            </h1>
          </div>
        </div>
        <div class="row">
          <MDBCol id="searchBar">
            <MDBFormInline className="input-group md-form form-sm form-1 pl-0">
              <input
                className="form-control form-control-lg"
                type="tkolklext"
                placeholder="Search by company name"
                aria-label="Search"
                value={this.state.filter}
                onChange={this.handleChange}
              />
              <MDBBtn
                background="green"
                color="#000"
                rounded
                size="md"
                type="submit"
                className="mr-auto"
                onClick={this.handleSearch}
              >
                <MDBIcon icon="search" />
              </MDBBtn>
            </MDBFormInline>
          </MDBCol>
          <div class="col-sm-2">
            <MDBBtn className="filterBtn" onClick={this.filterClick}>
              <span>Filter </span>
              <MDBIcon icon="angle-down" />
            </MDBBtn>
          </div>
        </div>
        {this.state.toggle ? this.filterInfo() : null}
        {this.companyInfo()}
      </div>
    );
  }
}

export default Search;
