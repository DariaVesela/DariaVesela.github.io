import React from 'react';
import redProfilePic from '../images/red_profile_pic.jpeg';

const Introduction = (props) => {
  return (
    <div style={{display:'flex',flexDirection:'row',...props.style, alignItems: 'center'}}>
      
          {/* Placeholder for Profile Picture */}
          <img src={redProfilePic} alt="Profile" style={{ width: '6cm', height: '6cm', marginRight: '2cm', borderRadius: '50%' }}/>
        <div>
          <p>Hi! My name is Daria!</p>
          <p>I am a ...</p>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button> Book a Meeting</button>
        <button> Download Resume</button>
        </div>
        </div>
    </div>
  );
};

const outerContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Horizontally center the whole container
  alignItems: 'center', // Vertically center the whole container
  height: '100vh', // Ensure the container takes up the full height of the viewport
};

const containerStyle = {
  display: 'flex', // Aligns items in a row (horizontally)
  flexDirection: 'row', // Layout the profile picture and box side by side
  alignItems: 'center', // Vertically center the items inside the container
  marginBottom: '40px',
};

const boxStyle = {
  border: '2px solid #BDBDBD', // Light gray border around the box
  borderRadius: '10px', // Slightly rounded corners
  padding: '20px', // Adds space inside the box
  maxWidth: '300px', // Optional: controls the width of the box
  textAlign: 'center', // Centers the text inside the box
  fontFamily: 'sans-serif', // Clean font family
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Optional: adds a shadow for depth
  backgroundColor: 'white', // Sets the background color to white
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
  backgroundColor: '#d42417',
  color: 'white',
  borderRadius: '5px',
};

export default Introduction;
