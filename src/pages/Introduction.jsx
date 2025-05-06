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
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'flex-end', 
    }}>
      <div className="site-title" style={{ 
        textAlign: 'center', 
        position: 'absolute', 
        top: '10px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        color: 'white', 
        fontSize: '0.5rem', 
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' 
      }}>
        <h1>Dark Night Whispers</h1>
      </div>
    </div>
  );
}

export default Introduction;