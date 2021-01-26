import { REGISTER_SUCCESS, REGISTER_FAIL } from '../states/register';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../states/login';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  avatar: '',
  token: '',
  errors: null
};

export default (state = initialState, action) => {
  const { type, payload = null } = action;
  
  switch(type) {    
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        errors: null,
        ...payload
      }

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        ...payload
      };
    
    case 'CLEAR_DATA':
      return initialState;
      
    default: 
      return state;
  }
}