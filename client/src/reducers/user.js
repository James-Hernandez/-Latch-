import { REGISTER_SUCCESS } from '../states/register';
import { LOGIN_SUCCESS } from '../states/login';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload = null } = action;
  
  switch(type) {    
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...payload
      }
      
    default: 
      return state;
  }
}