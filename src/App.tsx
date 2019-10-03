import React from 'react';
import './App.css';
import EnhancedClickCount from './components/ClickCount';
import EnhancedHoverCount from './components/HoverCount';

function App() {
  return (
    <div className="App">
      <EnhancedClickCount name='Sri'/>
      <EnhancedHoverCount name='Sri'/>
    </div>
  );
}

export default App;
