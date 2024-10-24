import React from 'react';
import picture from '../homePagePic.png'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>BUILT Engineers and Consultants PTY LTD</h1>
      </header>
      <img src={picture} alt='' height="500" width="1000" justify-content="center"/>
    </div>
  );
}

export default HomePage;