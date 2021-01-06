const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("config");

const router = express.Router();
const User = require('../schemas/user');

router.post(
  '/',
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const error = { message: 'Invalid email or password' }

      const user = await User.findOne(
        { 'email': email }
      ).orFail(error);

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw error;
      }

      const token = jwt.sign(
        { 'id': user._id },
        config.get('jwtSecret'),
        { expiresIn: '20d' }
      );

      const userData = {
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'userName': user.userName,
        'avatar': user.avatar,
        'token': token
      }
      res.status(200).json(userData);
    }
    catch (err) {
      res.status(500).json({ 'errors': err.message });
    }
  }
);

module.exports = router;