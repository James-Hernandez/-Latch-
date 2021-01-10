import { REGISTER_SUCCESS, REGISTER_FAIL } from './state';

const initialState = {
  
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {    
    case REGISTER_SUCCESS:

    default:
      return state;
  }
}