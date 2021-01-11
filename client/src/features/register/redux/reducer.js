import { REGISTER_SUCCESS, REGISTER_FAIL } from './state';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  avatar: '',
  token: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {    
    case REGISTER_SUCCESS:
      return {
        ...state,
        payload
      }

    case REGISTER_FAIL:
    default:
      return state;
  }
}