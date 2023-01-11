const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordCheck: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
