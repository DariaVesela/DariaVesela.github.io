import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="profile-picture">
        {/* Placeholder for Profile Picture */}
        <img src="https://via.placeholder.com/100" alt="Profile" />
      </div>
      <div className="intro">
        <p>Hi! My name is Daria!</p>
        <p>I am a ...</p>
      </div>
      <div className="buttons">
        <button className="resume-btn">Resume</button>
        <button className="meeting-btn">Book a Meeting</button>
      </div>
    </div>
  );
}

export default Header;
