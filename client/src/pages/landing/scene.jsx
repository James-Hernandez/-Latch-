import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

export default Landing;