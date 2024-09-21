import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
      <div style={{ borderRadius: '50%', overflow: 'hidden', marginBottom: '20px' }}>
        {/* Placeholder for Profile Picture */}
        <img src="https://via.placeholder.com/100" alt="Profile" style={{ width: '100px', height: '100px' }} />
      </div>
      <div>
        <p>Hi! My name is Daria!</p>
        <p>I am a ...</p>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <button style={buttonStyle}>Resume</button>
        <button style={buttonStyle}>Book a Meeting</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  borderRadius: '5px',
};

export default Header;
