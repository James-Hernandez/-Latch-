import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { registering } from '../../dispatchs/register';

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
  const error = useSelector(states => states.error);
  const history = useHistory();

  const onChange = (e, prop) => {
    setUserForm({...userForm, [prop]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatching = async () => {
      const { action, isValid} = await registering(userForm);
      dispatch(action);

      if (isValid) {
        history.push('/home');
      }
    }
    dispatching();
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
          errorMessage={error && error['firstName'] && error['firstName'].message}
        />

        <FormInput 
          name='lastName'
          type='text'
          value={userForm.lastName}
          handleChange={(e) => onChange(e, 'lastName')}
          label='lastName'
          errorMessage={error && error['lastName'] && error['lastName'].message}
        />

        <FormInput 
          name='email'
          type='email'
          value={userForm.email}
          handleChange={(e) => onChange(e, 'email')}
          label='email'
          errorMessage={error && error['email'] && error['email'].message}
        />

        <FormInput 
          name='userName'
          type='text'
          value={userForm.userName}
          handleChange={(e) => onChange(e, 'userName')}
          label='Username'
          errorMessage={error && error['userName'] && error['userName'].message}
        />

        <FormInput 
          name='password'
          type='password'
          value={userForm.password}
          handleChange={(e) => onChange(e, 'password')}
          label='Password'
          errorMessage={error && error['password'] && error['password'].message}
        />

        <FormInput 
          name='confirmPassword'
          type='password'
          value={userForm.confirmPassword}
          handleChange={(e) => onChange(e, 'confirmPassword')}
          label='confirmPassword'
          errorMessage={error && error['confirmPassword'] && error['confirmPassword'].message}
        />
        
        <CustomButton type='submit'>
          Submit
        </CustomButton>
      </form>
    </div>  
  );
}

export default Register;