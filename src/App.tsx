import React from 'react';
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';

function App() {
  return (
    <div className="App">
      <ClickCount name="Sri" />
      <HoverCount name="Sri" />
    </div>
  );
}

export default App;
