const mongoose = require('mongoose');

const commentSchema = {
  comment: {
    type: String,
  },
  user: {
    type: String,
  },
  password: {
    type: String,
  },
  createAt: {
    type: String,
  },
};

module.exports = mongoose.model('Comment', commentSchema);
