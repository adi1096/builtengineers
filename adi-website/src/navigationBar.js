import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navigationBar.css';
import logo from './logo_3.png'

const navigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" class='navbar navbar-default text-center'>
      <Container className={styles.navbarContainer} >
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt='' height="50" width="100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigationBar;