const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const foodSchema = new mongoose.Schema({
  foodId: {
    required: true,
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
  },
  restaurantName: {
    type: String,
  },
  menuName: {
    type: String,
  },
  desc: {
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
foodSchema.plugin(autoIncrement.plugin, {
  model: 'foods',
  field: 'foodId',
  startAt: 1,
  increment: 1,
});

module.exports = mongoose.model('Food', foodSchema);
