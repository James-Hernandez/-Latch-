import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../states/register';

export const registering = async (userData) => {
  try {
    const res = await axios.request({
      method: 'POST',
      url: '/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: userData
    });
    
    const data = res.data;
    const action = {
      type: REGISTER_SUCCESS,
      payload: data
    };

    const state = {
      action: action,
      isValid: true
    }
    return state;
  }
  catch (err) {
    const errors = err.response.data;
    const action = {
      type: REGISTER_FAIL,
      payload: errors
    };

    const state = {
      action: action,
      isValid: false
    }
    return state;
  }
}

