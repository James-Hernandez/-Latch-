import React from 'react';
import { Fragment } from 'react';

import Errors from './error';

const FormInput = ({handleChange, label, errorMessage = null, ...otherProps}) => (
  <Fragment>
    <Errors
      message={errorMessage}
    />
    
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps}/>
      {
        label ? 
        (<label className={`${otherProps.value.length && 'shrink'} form-input-label `}>
          {label}
        </label>)
        : null
      }
    </div>
  </Fragment>
)

export default FormInput;