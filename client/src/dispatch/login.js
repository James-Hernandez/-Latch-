
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../states/login';

export const loginning = async (userData) => {
  try {
    const res = await axios.request({
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: userData
    });
    
    const data = res.data;
    const action = {
      type: LOGIN_SUCCESS,
      payload: data
    };
    return action;
  }
  catch (err) {
    const errors = err.response.data;
    const action = {
      type: LOGIN_FAIL,
      payload: errors
    };
    return action;
  }
}