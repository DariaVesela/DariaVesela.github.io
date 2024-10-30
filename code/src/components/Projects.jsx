import React from 'react';

const Projects = (props) => {
  return (
    <div style={props.style}>
      
          <div style={boxStyle}>
            <p>text text text</p>
          </div>
          <div style={boxStyle}>
            <p>text text text</p>
          </div>
          <div style={boxStyle}>
            <p>text text text</p>
          </div>
          
    </div>
  );
};

/* first figure out how to control the ugly box, then play with sizing */

const boxStyle = {
  display: 'flex', // Use flex to ensure centered text
  flex: 1,
  border: '2px solid #BDBDBD', // Light gray border around the box
  height: 'auto', // Allows height to adjust based on content
  minHeight: '4cm', // Ensures minimum height but is flexible beyond that
  borderRadius: '10px', // Slightly rounded corners
  padding: '5%', // Adjust padding to be more responsive
  textAlign: 'center', // Centers the text inside the box
  fontFamily: 'sans-serif', // Clean font family
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Optional: adds a shadow for depth
  backgroundColor: 'white', // Sets the background color to white
};

export default Projects;
