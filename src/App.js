import React from 'react';
import cup from './assets/img/cup.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cup} className="Cup-placeholder" alt="placeholder" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          Learn React
        
      </header>
    </div>
  );
}

export default App;
