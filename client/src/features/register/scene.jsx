import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registering } from './route';

import Errors from './error.message';
import FormInput from './form.input';
import CustomButton from './custom.button';


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

  const errors = useSelector(states => states.errors);

  useEffect(() => {
    console.log(errors);
  },[errors])

  const onChange = (e, prop) => {
    setUserForm({...userForm, [prop]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatching_state = async () => {
      const state = await registering(userForm);
      dispatch(state);
    }
    dispatching_state();
  };
  

  return(
    <div className="sign-in">
      <h2>Register Here</h2>
      <span>Let's make an account</span>
      <form onSubmit={(e) => handleSubmit(e)}>
     
      <FormInput 
      name='firstName'
      type='text'
      value={userForm.firstName}
      handleChange={(e) => onChange(e, 'firstName')}
      label='firstName'
      Errors={Errors(errors ? errors['firstName'] : '')}
      required
       />

    
      <FormInput 
      name='lastName'
      type='text'
      value={userForm.lastName}
      handleChange={(e) => onChange(e, 'lastName')}
      label='lastName'
      required
       />

    
      <FormInput 
      name='email'
      type='email'
      value={userForm.email}
      handleChange={(e) => onChange(e, 'email')}
      label='email'
      required
       />

      <FormInput 
      name='userName'
      type='text'
      value={userForm.userName}
      handleChange={(e) => onChange(e, 'userName')}
      label='Username'
      required
       />


      <FormInput 
      name='password'
      type='password'
      value={userForm.password}
      handleChange={(e) => onChange(e, 'password')}
      label='Password'
      required
       />

      <FormInput 
      name='confirmPassword'
      type='password'
      value={userForm.confirmPassword}
      handleChange={(e) => onChange(e, 'confirmPassword')}
      label='confirmPassword'
      required
       />
      
      <CustomButton type='submit'>
        Submit
      </CustomButton>
    </form>
    </div>
    
  )
}

export default Register;