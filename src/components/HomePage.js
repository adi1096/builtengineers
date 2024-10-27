import React from 'react';
import picture from '../homePagePic.png'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Built Engineers and Consultants</h1>
      </header>
      <img src={picture} alt='' height="500" width="1000" justify-content="center"/>
    </div>
  );
}

export default HomePage;