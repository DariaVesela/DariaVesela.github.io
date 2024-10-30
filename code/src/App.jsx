import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';

function App() {
  return (<div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
    <div style={{ width: '100%', maxWidth: '800px', display: 'flex',  flexDirection: 'column', gap: 50, marginTop:50 }}>
    <Introduction style={{flex: 1, width:'100%'}}/>
    <Projects style={{flex: 1, width: '100%', gap:50, display:'flex', flexDirection: 'column'}}/>
    </div>
    </div>
  );
}

export default App;

