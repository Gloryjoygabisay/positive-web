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
        top: '10%', 
        left: '57%', /* Adjusted left position to move the title slightly more to the right */
        transform: 'translateX(-50%)', 
        color: 'white', 
        fontSize: '0rem', 
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' 
      }}>
        <h1>Dark Night Whispers</h1>
        <h2 style={{ 
          marginTop: '50px', /* Adjusted margin to move the tagline lower */
          fontSize: '1.5rem', 
          color: '#dcdcdc', 
          fontStyle: 'italic', 
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' 
        }}>Begin your journey into the unknown.</h2>
        <p style={{ 
          marginTop: '15px', 
          fontSize: '1rem', 
          color: '#e0e0e0', 
          lineHeight: '1.5', 
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          marginLeft: '20px', /* Adjusted margin to move paragraph to the right */
          textAlign: 'left' /* Changed text alignment to left */
        }}>Don’t trust the quiet. In the dark, things stir — stories buried alive, footsteps without feet, laughter with no mouth. What you’re about to read wasn’t meant to be found. But since you’re here… step carefully. In Dark Night Whispers, the stories don’t end when the page does — they follow you.</p>
      </div>
    </div>
  );
}

export default Introduction;