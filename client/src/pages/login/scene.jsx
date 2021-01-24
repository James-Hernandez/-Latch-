import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginning } from '../../dispatch/login';

import FormInput from '../../components/form.input';
import CustomButton from '../../components/custom.button';
import Error from '../../components/error';

import './styles.scss';

const Login = () => {
  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    console.log(errors);
  })

  const onChange = (e, prop) => {
    setUserForm({...userForm, [prop]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatching_state = async () => {
      const state = await loginning(userForm);
      dispatch(state);
    }
    dispatching_state();
  };

  return(
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Login with your email and password</span>

      <div>
        <Error message={errors} />
      </div>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput 
          name='email'
          type='email'
          value={userForm.email}
          handleChange={(e) => onChange(e, 'email')}
          label='email'
          errorMessage={null}
        />

        <FormInput 
          name='password'
          type='password'
          value={userForm.password}
          handleChange={(e) => onChange(e, 'password')}
          label='password'
          errorMessage={null}
        />

        <CustomButton type='submit'>
          Login
        </CustomButton>
      </form>
    </div>   
  );
}

export default Login;