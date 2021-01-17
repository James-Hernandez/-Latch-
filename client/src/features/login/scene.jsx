import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from './form.input';
import CustomButton from './custom.button';
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
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Login with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>

      <FormInput 
      name='email'
      type='email'
      value={userForm.email}
      handleChange={(e) => onChange(e, 'email')}
      label='email'
      required
       />

      

      <FormInput 
      name='password'
      type='password'
      value={userForm.password}
      handleChange={(e) => onChange(e, 'password')}
      label='password'
      required
       />

      
      <CustomButton type='submit'>
       Login
      </CustomButton>
    </form>
    </div>
    
  )
}

export default Login;