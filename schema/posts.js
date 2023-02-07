const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const postSchema = new mongoose.Schema({
  postId: {
    type: Number,
    default: 0,
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
});

// 특정 컬럼 자동으로 증가될수있게 설정!
postSchema.plugin(autoIncrement.plugin, {
  model: 'posts',
  field: 'postId',
  startAt: 1,
  increment: 1,
});

module.exports = mongoose.model('Post', postSchema);
