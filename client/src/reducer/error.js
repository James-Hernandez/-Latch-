import { CLEAR_DATA } from '../states/global';
import { LOGIN_FAIL } from '../states/login';
import { REGISTER_FAIL } from '../states/register';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload = null } = action;
  
  switch(type) {    
    case LOGIN_FAIL:
      return payload;

    case REGISTER_FAIL:
      return {
        ...payload
      }

    case CLEAR_DATA:
      return initialState;
      
    default: 
      return state;
  }
}