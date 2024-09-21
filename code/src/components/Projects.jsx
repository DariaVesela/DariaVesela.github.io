import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div style={projectListStyle}>
        <div style={projectStyle}>
          <div style={projectImagePlaceholderStyle}></div>
          <p>Title</p>
        </div>
        <div style={projectStyle}>
          <div style={projectImagePlaceholderStyle}></div>
          <p>Title</p>
        </div>
        <div style={projectStyle}>
          <div style={projectImagePlaceholderStyle}></div>
          <p>Title</p>
        </div>
      </div>
    </div>
  );
};

const projectListStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
};

const projectStyle = {
  width: '150px',
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

const projectImagePlaceholderStyle = {
  width: '100%',
  height: '100px',
  backgroundColor: '#f0f0f0',
  marginBottom: '10px',
};

export default Projects;
