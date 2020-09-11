const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();
const User = require('../schemas/user');

router.post(
  '/',
  async (req, res) => {
    try {
      const { firstName, lastName, email, userName, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const encryptPassword = await bcrypt.hash(password, salt);
      const avatar = gravatar.url(
        email,
        {
          s: '200',
          r: 'pg',
          d: 'retro'
        }
      );
      const user = await User.create({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'userName': userName,
        'password': encryptPassword,
        'avatar': avatar
      });
      
      const token = jwt.sign(
        { 'id': user._id },
        config.get('jwtSecret'),
        { expiresIn: '20d' }
      );
      
      const userData = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'userName': userName,
        'avatar': avatar,
        'token': token
      }
      res.status(200).json(userData);
    }
    catch (err) {
      res.status(500).json({ 'errors': err });
    }
  }
);

module.exports = router;