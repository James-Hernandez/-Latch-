import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registering } from './route';

const Register = () => {
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
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

    const isSamePassword = userForm.password === userForm.confirmPassword;
    if (isSamePassword) {
      const user = {
        'firstName': userForm.firstName,
        'lastName': userForm.lastName,
        'email': userForm.email,
        'userName': userForm.userName,
        'password': userForm.password
      };
      
      const dispatchinng_state = async () => {
        const state = await registering(user);
        dispatch(state);
      }
      dispatchinng_state();
    }
  };

  return(
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='field-input'>
        <label>
          First Name:
          <input type='text' value={userForm.firstName} onChange={(e) => onChange(e, 'firstName')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Last Name:
          <input type='text' value={userForm.lastName} onChange={(e) => onChange(e, 'lastName')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Email:
          <input type='email' value={userForm.email} onChange={(e) => onChange(e, 'email')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Username
          <input type='text' value={userForm.userName} onChange={(e) => onChange(e, 'userName')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Password:
          <input type='password' value={userForm.password} onChange={(e) => onChange(e, 'password')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Confirm Password:
          <input type='password' value={userForm.confirmPassword} onChange={(e) => onChange(e, 'confirmPassword')} />
        </label>
      </div>
      
      <button type='submit' value='Submit'>
        Button
      </button>
    </form>
  )
}

export default Register;