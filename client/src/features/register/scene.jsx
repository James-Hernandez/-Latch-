import React, { useState, useEffect } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    console.log("I will render every seconds");
  })

  const onChange = (e,prop) => {
    setForm({...form, [prop]:e.target.value});
  };

  const handleSubmit = (_) => {
    const isSamePassword = form.password === form.confirmPassword;
    if (isSamePassword) {
      // go a function that create a new user and send it to mongoDB with axio
      // then go to home rooute
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className='field-input'>
        <label>
          First Name:
          <input type='text' value={form.firstName} onChange={(e) => onChange(e, 'firstName')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Last Name:
          <input type='text' value={form.lastName} onChange={(e) => onChange(e, 'lastName')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Email:
          <input type='email' value={form.email} onChange={(e) => onChange(e, 'email')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Password:
          <input type='password' value={form.password} onChange={(e) => onChange(e, 'password')} />
        </label>
      </div>

      <div className='field-input'>
        <label>
          Confirm Password:
          <input type='password' value={form.confirmPassword} onChange={(e) => onChange(e, 'confirmPassword')} />
        </label>
      </div>
      
      <button type='submit' value='Submit'>
        Button
      </button>
    </form>
  )
}

export default Register;