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
      padding: '10 px', // Adjusted padding
      userSelect: 'none', // Disable text selection
      display: 'flex', // Use flexbox for alignment
      flexDirection: 'column', // Align items vertically
      justifyContent: 'flex-start', // Align items to the top
      alignItems: 'flex-start', // Align items to the left
      paddingTop: '20px', // Add padding to move content down slightly
      position: 'fixed', // Fix the position to the viewport to prevent any movement
      top: '20px', // Anchor the heading and subheading to the top
      left: '20px', // Anchor the heading and subheading to the left
      margin: 0, // Remove any default margin that might cause movement
      padding: 0, // Remove any default padding that might cause movement
    }}>
      <h1 style={{ pointerEvents: 'none', userSelect: 'none' }}>Introduction</h1>
      <p style={{ pointerEvents: 'none', userSelect: 'none' }}>Welcome to our application! Explore the stories and mark your favorites.</p>
    </div>
  );
}

export default Introduction;