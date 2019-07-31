import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
  render() {
    return (
      <Navbar className="header" expand="lg">
        <Navbar.Brand className="logo" href="#home">
          <span>Архитекторы</span>
          <span> Беларуси</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <Nav.Link href="#list">Все архитекторы</Nav.Link>
          </Nav>
          <i className="russia flag" />
          <NavDropdown title="Russian" id="basic-nav-dropdown">
            <NavDropdown.Item href="#rus" onClick={this.handleClick}>
              <i className="russia flag" />
              Russian
            </NavDropdown.Item>
            <NavDropdown.Item href="#us">
              <i className="united states flag" />
              English
            </NavDropdown.Item>
            <NavDropdown.Item href="#by">
              <i className="belarus flag" />
              Belarusian
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
