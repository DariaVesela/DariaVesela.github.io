import React from 'react';

const Header = () => {
  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', marginRight: '20px' }}>
          {/* Placeholder for Profile Picture */}
          <img src="https://via.placeholder.com/100" alt="Profile" style={{ width: '100px', height: '100px' }} />
        </div>
        <div style={boxStyle}>
          <p>Hi! My name is Daria!</p>
          <p>I am a ...</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button style={buttonStyle}>Book a Meeting</button>
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
  height: '40px',
  minWidth: '90px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#d42417',
  color: 'white',
  borderRadius: '5px',
};

export default Header;
