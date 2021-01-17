import React from 'react';

import './styles.scss';

const FormInput = ({handleChange, label,Errors, ...otherProps}) => (
  <div className='group'>
    {Errors}
    <input className='form-input' onChange={handleChange} {...otherProps}/>
    {
      label ? 
      (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label `}>
        {label}
      </label>)
      : null
    }
  </div>
)

export default FormInput;