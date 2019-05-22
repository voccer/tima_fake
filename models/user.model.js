const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  typeOfAcc: {
    type: String,
    required: true,
    enum: ['loan', 'borrow']
  },
  role:{
    type: String,
    required: true,
    enum: ['ADMIN', 'MEMBER'],
    default: 'MEMBER'

  }
});
const User = mongoose.model('users', UserSchema);
module.exports = User;
