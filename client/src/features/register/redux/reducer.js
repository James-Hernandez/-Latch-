import { REGISTER_SUCCESS, REGISTER_FAIL } from './state';

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
  const { type, payload } = action;

  switch(type) {    
    case REGISTER_SUCCESS:
      return {
        ...state,
        errors: null,
        payload
      }

    case REGISTER_FAIL:
      return {
        ...state,
        errors: payload
      };
      
    default: 
      return state
  }
}