const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
