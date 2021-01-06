import React from 'react';
import logo from './logo.svg';
import './App.css';

import TestMenu from './component/test-menu/test-menu.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestMenu />
    </div>
  );
}

export default App;
