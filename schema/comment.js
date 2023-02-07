const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const commentSchema = new mongoose.Schema({
  commentId: {
    required: true,
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
  },
  content: {
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
});

// 특정 컬럼 자동으로 증가될수 있게 설정!
commentSchema.plugin(autoIncrement.plugin, {
  model: 'comments',
  field: 'commentId',
  startAt: 1,
  increment: 1,
});

module.exports = mongoose.model('Comment', commentSchema);
