import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Switch, Link, Route, useLocation, useHistory } from 'react-router-dom';

import Register from './pages/register/scene';
import Login from './pages/login/scene';

import './App.css';

const Landing = () => {
  const location = useLocation();

  return (
    <div>
      <Link to={{
        pathname: `${location.pathname}login`, 
        state: { 
          prevPath: location.pathname,
          isForm: true
        }
      }}>
        Login
      </Link>

      <br />

      <Link to={{
        pathname: `${location.pathname}register`, 
        state: { 
          prevPath: location.pathname,
          isForm: true
        }
      }}>
        Register
      </Link>
    </div>
  )
};

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
}

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    return history.listen((location, action) => {
      console.log(action);
      console.log(location);
      switch(action) {
        case 'POP':
          const action = {type: 'CLEAR_DATA'}
          dispatch(action);
      }
    });
  }, [history]);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login} />
        <Route exact ath='/home' component={Home} />
      </Switch>  
    </div>
  );
}

export default App;
