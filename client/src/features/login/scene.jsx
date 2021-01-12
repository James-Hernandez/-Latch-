import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { logingin } from './route';

const Login = () => {
  const [userForm, setUserForm] = useState({
    
    email: '',
    password: ''
    
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("I will render every seconds");
  })

  const onChange = (e, prop) => {
    setUserForm({...userForm, [prop]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatching_state = async () => {
      // const state = await logingin(userForm);
      // dispatch(state);
    }
    dispatching_state();
  };

  return(
    <form onSubmit={(e) => handleSubmit(e)}>

      <div className='field-input'>
        <label>
          Email:
          <input type='email' value={userForm.email} onChange={(e) => onChange(e, 'email')} />
        </label>
      </div>

      

      <div className='field-input'>
        <label>
          Password:
          <input type='password' value={userForm.password} onChange={(e) => onChange(e, 'password')} />
        </label>
      </div>

      
      <button type='submit' value='Submit'>
        Button
      </button>
    </form>
  )
}

export default Login;