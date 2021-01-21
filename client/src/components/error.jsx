import React from 'react';

const Error = (props) => {
  const { message } = props;

  return(
    <span>
      {message}
    </span>
  )
}

export default Error;