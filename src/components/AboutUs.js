import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <h1>About Us</h1>
      <div className="container1">
        <div className="column">
          <div className="service-box">
            <h3>Experience</h3>
            <p>With over 20 years of combined experience, our team brings a wealth of knowledge and expertise to every project, ensuring outstanding engineering solutions.</p>
          </div>
        </div>

        <div className="column">
          <div className="service-box">
            <h3>Innovation</h3>
            <p>We leverage industry-endorsed softwares and advanced methodologies to optimise designs, enhance structural performance, and deliver efficient solutions.</p>
          </div>
        </div>

        <div className="column">
          <div className="service-box">
            <h3>Collaboration</h3>
            <p>We believe in open communication and strong collaboration with clients, architects, builders, and consultants, fostering a shared vision to achieve successful project outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
