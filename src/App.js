import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";
import logo from './logo_bw.png';
import HomePage from './components/HomePage.js'
import Services from './components/Services.js'
import AboutUs from './components/AboutUs.js'
import ContactUs from './components/ContactUs.js'

const App = () => {
  return (
    <>
      <div className="App">
        {/* Toolbar */}
        <nav className="toolbar">
          <ul margin="0">
            <img src={logo} alt="Logo" height="80"  />
            <li>
              <Link to="home" smooth={true} duration={500} justifyContent="right">
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
  
        {/* Sections */}
        <Element name="home" className="section heading-section">
          <HomePage />
        </Element>
  
        <Element name="services" className="section services-section">
          <Services />
        </Element>
  
        <Element name="about" className="section about-section">
          <AboutUs />
        </Element>

        <Element name="contact" className="section contact-section">
          <ContactUs />
        </Element>
      </div>
    </>
  );
};

export default App;
