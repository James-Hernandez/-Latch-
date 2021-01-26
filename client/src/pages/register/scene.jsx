import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registering } from '../../dispatch/register';

import FormInput from '../../components/form.input';
import CustomButton from '../../components/custom.button';

import './styles.scss';

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
  const errors = useSelector(states => states.user.errors);
  
  useEffect(() => {
  }, [errors]);

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
          errorMessage={errors && errors['firstName'] && errors['firstName'].message}
        />

        <FormInput 
          name='lastName'
          type='text'
          value={userForm.lastName}
          handleChange={(e) => onChange(e, 'lastName')}
          label='lastName'
          errorMessage={errors && errors['lastName'] && errors['lastName'].message}
        />

        <FormInput 
          name='email'
          type='email'
          value={userForm.email}
          handleChange={(e) => onChange(e, 'email')}
          label='email'
          errorMessage={errors && errors['email'] && errors['email'].message}
        />

        <FormInput 
          name='userName'
          type='text'
          value={userForm.userName}
          handleChange={(e) => onChange(e, 'userName')}
          label='Username'
          errorMessage={errors && errors['userName'] && errors['userName'].message}
        />

        <FormInput 
          name='password'
          type='password'
          value={userForm.password}
          handleChange={(e) => onChange(e, 'password')}
          label='Password'
          errorMessage={errors && errors['password'] && errors['password'].message}
        />

        <FormInput 
          name='confirmPassword'
          type='password'
          value={userForm.confirmPassword}
          handleChange={(e) => onChange(e, 'confirmPassword')}
          label='confirmPassword'
          errorMessage={errors && errors['confirmPassword'] && errors['confirmPassword'].message}
        />
        
        <CustomButton type='submit'>
          Submit
        </CustomButton>
      </form>
    </div>  
  );
}

export default Register;