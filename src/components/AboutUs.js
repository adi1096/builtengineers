import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="container1">
        <div className="column">
          <div className="service-box">
            <h3>Experience</h3>
            <p>Our team brings years of experience to every project, ensuring the highest standards of engineering expertise.</p>
          </div>
        </div>

        <div className="column">
          <div className="service-box">
            <h3>Innovation</h3>
            <p>We embrace cutting-edge technologies and methodologies, constantly seeking to optimize designs and enhance structural integrity.</p>
          </div>
        </div>

        <div className="column">
          <div className="service-box">
            <h3>Collaboration</h3>
            <p>We value open communication and collaboration with clients and partners, fostering a shared vision for successful projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
