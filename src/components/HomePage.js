import React from 'react';
import './HomePage.css';
import testvideo from '../testvid.mp4';

const HomePage = () => {
  return (
    <div className="home-page">
      <video autoPlay loop muted className="home-video">
        <source src={testvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>Built Engineers &amp; Consultants: Building Your Future</h1>
      </div>
    </div>
  );
};

export default HomePage;

