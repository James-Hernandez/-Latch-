import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const error = useSelector((state) => state.error);
  const history = useHistory();

  const onChange = (e, prop) => {
    setUserForm({...userForm, [prop]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispatching = async () => {
      const { action, isValid } = await loginning(userForm);
      dispatch(action);

      if (isValid) {
        history.push('/home')
      }
    }
    dispatching();
  };

  return(
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Login with your email and password</span>

      <div>
        <Error message={error} />
      </div>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput 
          name='email'
          type='email'
          value={userForm.email}
          handleChange={(e) => onChange(e, 'email')}
          label='email'
        />

        <FormInput 
          name='password'
          type='password'
          value={userForm.password}
          handleChange={(e) => onChange(e, 'password')}
          label='password'
        />

        <CustomButton type='submit'>
          Login
        </CustomButton>
      </form>
    </div>   
  );
}

export default Login;