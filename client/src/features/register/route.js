import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './redux/state';

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

    console.log(res.data);
    
    const state = {
      type: REGISTER_SUCCESS,
      payload: res.data
    };
    return state;
  }
  catch (err) {
    const state = {
      type: REGISTER_FAIL,
      payload: err
    };
    return state;
  }
}

