import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <Header />
      <Projects />
    </div>
  );
}

export default App;
