import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom';

import Landing from './pages/landing/scene';
import Register from './pages/register/scene';
import Login from './pages/login/scene';
import Home from './pages/home/scene';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return history.listen((location, action) => {
      switch(action) {
        case 'POP':
        case 'PUSH':
          const action = {type: 'CLEAR_DATA'}
          dispatch(action);
          break;
      }
    });
  }, [history]);
 
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact ath='/home' component={Home}/>
      </Switch>  
    </div>
  );
}

export default App;
