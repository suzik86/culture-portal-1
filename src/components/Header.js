import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withTranslation } from 'react-i18next';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 'russia flag',
      language: 'Russian',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(flag, lang) {
    this.setState(() => ({
      flag: `${flag} flag`,
      language: lang,
    }));
  }

  render() {
    const { flag, language } = this.state;
    const { t } = this.props;

    return (
      <Navbar className="header" expand="lg">
        <Navbar.Brand className="logo" href="#home">
          <span>{t('site.title')}</span>
          <span>{t('site.title1')}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <Nav.Link href="#list">{site.persons}</Nav.Link>
          </Nav>
          <i className={flag} />
          <NavDropdown title={language} id="basic-nav-dropdown">
            <NavDropdown.Item href="#rus" onClick={() => this.changeLanguage('russia', 'Russian')}>
              <i className="russia flag" />
              Russian
            </NavDropdown.Item>
            <NavDropdown.Item href="#us" onClick={() => this.changeLanguage('united states', 'English')}>
              <i className="united states flag" />
              English
            </NavDropdown.Item>
            <NavDropdown.Item href="#by" onClick={() => this.changeLanguage('belarus', 'Belarusian')}>
              <i className="belarus flag" />
              Belarusian
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withTranslation()(Header);
