const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function(v) {
        const isValid = !await this.model('users').findOne({email: v});
        return isValid;
      },
      message: (props) => `${props.value} is already exist.`
    }
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function(v) {
        const isValid = !await this.model('users').findOne({email: v});
        return isValid;
      },
      message: (props) => `${props.value} is already exist.`
    }
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model('users', UserSchema);