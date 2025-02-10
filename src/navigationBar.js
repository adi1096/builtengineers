import React, { useState } from 'react';
import {
  CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, 
  CNavItem, CNavLink,
} from '@coreui/react';
import styles from './navigationBar.css';
import logo from './logo_3.png';

const NavigationBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" className={`${styles.navbar} custom-navbar`}>
        <CContainer fluid className="custom-container">
          <CNavbarBrand href="/">
            <img src={logo} alt="Logo" />
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ms-auto">
              <CNavItem>
                <CNavLink href="/" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/projects">Projects</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/aboutus">About Us</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/contactus" className="contact-us-btn">Contact Us</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};


export default NavigationBar;

