import React from 'react';
import picture from '../homepage_2.jpeg'; // Make sure the path is correct
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-overlay">
        <h1 padding-left= "20px">Built Engineers &amp; Consultants: Building Your Future</h1>
      </div>
      <img src={picture} alt="Home Page Visual" />
    </div>
  );
};

export default HomePage;
