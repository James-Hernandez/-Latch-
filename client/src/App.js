import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';

import Register from './pages/register/scene';
import Login from './pages/login/scene';

import './App.css';

const HomePage = (props) => {
  // console.log(props);
  return (
    <div>
    <Link to={`${props.match.url}login`}>login</Link>
    <br />
    <Link to={`${props.match.url}register`}>Register</Link>
  </div>
  )
};

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login} />
          </Switch>  
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
