import React, { Component } from "react";
import { MDBIcon, MDBInput, MDBCol, MDBBtn, MDBFormInline } from "mdbreact";
class SearchBar extends Component {
  render() {
    return (
      <MDBCol id="searchBar">
        <MDBFormInline className="input-group md-form form-sm form-1 pl-0">
          <input
            className="form-control form-control-lg"
            type="tkolklext"
            placeholder="Search by company name"
            aria-label="Search"
          />
          <MDBBtn
            background="green"
            color="#000"
            rounded
            size="md"
            type="submit"
            className="mr-auto"
          >
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
    );
  }
}

export default SearchBar;
