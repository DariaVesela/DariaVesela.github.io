import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';

function App() {
  return (<div style={{flex: 1, display: 'flex', flexDirection: 'column', height:'100%'}}>
    <Introduction style={{flex: 1}}/>
    <Projects style={{flex: 1}}/>
    </div>
  );
}

export default App;

