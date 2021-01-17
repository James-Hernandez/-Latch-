const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult, body} = require('express-validator');

const router = express.Router();
const User = require('../schemas/user');

router.post(
  '/',
  [
    check('firstName')
      .notEmpty().withMessage('First name is required.')
      .isAlpha().withMessage('First name must be alphabets.'),

    check('lastName')
      .notEmpty().withMessage('Last name is required.')
      .isAlpha().withMessage('Last name must be alphabets.'),

    check('email')
      .notEmpty().withMessage('Email is required.')
      .isEmail().withMessage('Email must be in correct format.'),

    check('userName')
      .notEmpty().withMessage('Username is required.'),
    
    check('password')
      .isLength({ min: 6 }).withMessage('Enter password minimum 6 characters.'),

    check('confirmPassword')
      .exists()
      .custom((value, { req }) => value === req.body.password)
      .withMessage('Password does not match.')
  ],
  async (req, res) => {
    try {
      const errorFormatter = (prop) => {
        return {
          message: prop.msg
        };
      };
      
      const result = validationResult(req).formatWith(errorFormatter);
      if (!result.isEmpty()) {
        const errors = { errors: result.mapped() };
        throw errors;
      }

      const { firstName, lastName, email, userName, password, _ } = req.body;

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
      };
      res.status(200).json(userData)
    }
    catch (err) {
      const errors = err.errors;
      res.status(500).json(errors);
    }
  }
);

module.exports = router;