import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="container2">
        {/* Left Column */}
        <div className="column">
          <div className="service-box">
            <h3>Feasibility Studies &amp; Concept Design</h3>
            <p>We assess your project's viability by considering key factors such as material selection, site conditions, and compliance with Australian Standards—all while ensuring alignment with your budget.</p>
          </div>
          <div className="service-box">
            <h3>Detailed Design &amp; Documentation for CC</h3>
            <p>We provide comprehensive structural plans, sketches, specifications, and calculations, delivering precise documentation to support the approval process and lead into the construction stage.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          <div className="service-box">
            <h3>Construction Services</h3>
            <p>We conduct HOLD POINT inspections throughout construction and provide the necessary certifications to ensure compliance and quality assurance.</p>
          </div>
          <div className="service-box">
            <h3>Project Management</h3>
            <p>We oversee all aspects of your project, from initial planning to completion, ensuring seamless coordination, timely execution, and effective budget management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
