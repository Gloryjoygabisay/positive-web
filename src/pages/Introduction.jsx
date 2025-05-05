import React from 'react';
import backgroundImage from '../assets/background.png';

function Introduction() {
  return (
    <div className="introduction" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      width: '100vw', 
      color: 'white', 
      overflow: 'hidden', 
      padding: '20px' // Adjusted padding
    }}>
      <h1>Introduction</h1>
      <p>Welcome to our application! Explore the stories and mark your favorites.</p>
    </div>
  );
}

export default Introduction;