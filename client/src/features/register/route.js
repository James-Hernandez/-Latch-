import axios from 'axios';

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
  }
  catch (err) {
    console.log(err);
  }
}

