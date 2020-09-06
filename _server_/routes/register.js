const express = require('express');
const User = require('../schemas/user');
const router = express.Router();

router.post(
  '/',
  async (req, res) => {
    try {
      const { firstName, lastName, email, username, password } = req.body;
      const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      });
      res.status(200).json({user});
    }
    catch (err) {
      res.status(500).send('Server error status 500');
    }
  }
);

module.exports = router;