import {LOGIN_FAILURE, LOGIN_SUCCESS} from './state';

const initialState = {

};

export default function(state = initialState, action) {
  const {type,payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {

      }
    case LOGIN_FAILURE:
      return {
        
      }
      
  
    default:
      return state
  }
}