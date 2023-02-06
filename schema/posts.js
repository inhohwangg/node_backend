const mongoose = require('mongoose');

const postSchema = {
  postId: {
    type: String,
  },
  userId: {
    type: String,
  },
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  content: {
    type: String,
  },
  createAt: {
    type: String,
  },
  updateAt: {
    type: String,
  },
};

module.exports = mongoose.model('Post', postSchema);
