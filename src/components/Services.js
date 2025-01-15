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
            <h3>1. Feasibility Studies</h3>
            <p>Evaluate the viability of your project, considering factors like site conditions, regulations, and costs.</p>
          </div>
          <div className="service-box">
            <h3>2. Detailed Design</h3>
            <p>Develop comprehensive structural plans, including drawings, specifications, and calculations.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          <div className="service-box">
            <h3>3. Construction Supervision</h3>
            <p>Monitor the construction process to ensure adherence to design specifications and building codes.</p>
          </div>
          <div className="service-box">
            <h3>4. Project Management</h3>
            <p>Coordinate all aspects of the project, from planning to completion, ensuring efficient execution and budget management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
