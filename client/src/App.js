import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Link, Route} from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store';

import Register from './features/register/scene';
import Login from './features/login/scene';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
    <Link to={`${props.match.url}login`}>login</Link>
    <br />
    <Link to={`${props.match.url}register`}>Register</Link>
  </div>
  )
  
};

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path ="/" component={HomePage}/>
          <Route exact path ='/register' component={Register}/>
          <Route exact path="/login" component={Login} />
        </Switch>
         
      </div>
    </Provider>
    
  );
}

export default App;
