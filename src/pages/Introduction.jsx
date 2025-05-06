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
      padding: '10px', // Adjusted padding
      userSelect: 'none', // Disable text selection
      display: 'flex', // Use flexbox for alignment
      flexDirection: 'column', // Align items vertically
      justifyContent: 'flex-start', // Align items to the top
      alignItems: 'center', // Center items horizontally
      paddingTop: '20px' // Add padding to move content down slightly
    }}>
      <h1 style={{ pointerEvents: 'none', userSelect: 'none' }}>Introduction</h1>
      <p style={{ pointerEvents: 'none', userSelect: 'none' }}>Welcome to our application! Explore the stories and mark your favorites.</p>
    </div>
  );
}

export default Introduction;