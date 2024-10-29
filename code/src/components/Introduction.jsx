import React from 'react';
import redProfilePic from '../images/red_profile_pic.jpeg';

const Introduction = (props) => {
  return (
    <div style={{display:'flex',flexDirection:'row',...props.style, alignItems: 'center'}}>
      
          {/* Placeholder for Profile Picture */}
          <img src={redProfilePic} alt="Profile" style={{ width: '6cm', height: '6cm', marginRight: '2cm', borderRadius: '50%' }}/>
        <div style={boxStyle}>
          <p>Hi! My name is Daria!</p>
          <p>I am a ...</p>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button style={buttonStyle}> Book a Meeting</button>
        <button style={buttonStyle}> Download Resume</button>
        </div>
        </div>
    </div>
  );
};


const boxStyle = {
  border: '2px solid #BDBDBD', // Light gray border around the box
  height: '4cm',
  borderRadius: '10px', // Slightly rounded corners
  padding: '20px', // Adds space inside the box
  maxWidth: '300px', // Optional: controls the width of the box
  textAlign: 'center', // Centers the text inside the box
  fontFamily: 'sans-serif', // Clean font family
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Optional: adds a shadow for depth
  backgroundColor: 'white', // Sets the background color to 
};

const buttonStyle = {
  display: 'flex',             // Use flex to ensure centered text
  alignItems: 'center',         // Center text vertically
  justifyContent: 'center',     // Center text horizontally
  height: '40px',
  width: '180px',              // Fixed height for all buttons
  minWidth: '140px',            // Fixed minimum width for uniform size
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#AB0210ff',
  color: 'white',
  borderRadius: '5px',
};

export default Introduction;
