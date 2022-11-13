import React, { Component }  from 'react';
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./RegNavBar.css";
import { FaHandHoldingMedical } from 'react-icons/fa'

export function HomeNavBar() {
  
  return (
    <Navbar bg="black" expand="sm" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/" className="custom items-align-center">
        <FaHandHoldingMedical className="logo-color me-2 mb-1" style={{fontSize: 45}} /> AYUR - O - STORE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{textAlign: "center"}}>
        <Nav className="ms-auto me-5 mx-auto" >
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin-Login">
            ADMIN LOGIN
          </Nav.Link>
          <Nav.Link as={Link} to="/CustomerRegister">
            SIGNUP
          </Nav.Link>
          <Nav.Link as={Link} to="/Customer-Login">
          CUSTOMER LOGIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomeNavBar