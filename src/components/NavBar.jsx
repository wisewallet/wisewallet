import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <div class="row">
      <Navbar className="navbar1" fixed="top" bg="white" expand="lg">
        <div class="col" style={{ paddingTop: "0.5%", paddingLeft: "0%" }}>
          <Navbar.Brand href="/">
            <img style={{ width: "100%" }} id="logo" src="logo.png"></img>
          </Navbar.Brand>
        </div>
        <div class="col">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginLeft: "80%" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="/about">
                <span>About Us</span>
              </Nav.Link>
              <Nav.Link href="/search">
                <span>Directory</span>
              </Nav.Link>
              <Nav.Link href="/add">
                <span>Add a Company</span>
              </Nav.Link>
              <Nav.Link href="/contact">
                <span>Contact Us</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
