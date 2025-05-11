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
      <div className="scrollable-section" style={{ maxWidth: '100vw', maxHeight: '70vh', overflow: 'auto' }}>
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
          }}>Don’t trust the quiet. In the dark, things stir — stories buried alive, footsteps without feet, laughter with no mouth. What you’re about to read wasn’t meant to be found. But since you’re here… step carefully.</p>
          <p style={{ 
            marginTop: '15px', 
            fontSize: '1rem', 
            color: '#e0e0e0', 
            lineHeight: '1.5', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            marginLeft: '20px', /* Adjusted margin to move paragraph to the right */
            textAlign: 'left', /* Changed text alignment to left */
            fontStyle: 'italic' /* Italicized the text */
          }}>In Dark Night Whispers, the stories don’t end when the page does — they follow you.</p>
          <p className="byline" style={{ 
            marginTop: '10px', 
            fontSize: '1rem', 
            color: '#ffcc00', /* Changed color to gold */ 
            fontStyle: 'italic', 
            fontWeight: 'bold', /* Made text bold */ 
            textAlign: 'right', 
            marginRight: '20px' 
          }}>— by Glory</p>
        </div>
        <div className="right-border" style={{ 
          position: 'absolute', 
          top: '0', 
          right: '0', 
          height: '100%', 
          width: '10px', 
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7))' 
        }}></div>
        <div className="scary-finger" style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '10%', 
          width: '50px', 
          height: '100px', 
          background: 'url(/src/assets/scary-finger.png) no-repeat center center', 
          backgroundSize: 'contain', 
          animation: 'scaryFingerAnimation 10s infinite' 
        }}></div>
      </div>

      <style>
        {`
          @keyframes scaryFingerAnimation {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-20px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Introduction;