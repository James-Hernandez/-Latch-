import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from './store';

import Register from './features/register/scene';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Register />  
      </div>
    </Provider>
    
  );
}

export default App;
