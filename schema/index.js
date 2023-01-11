const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
  mongoose.connect(process.env.db, {
    ignoreUndefined: true,
  });
  try {
    console.log('MongoDB 연결성공');
  } catch (error) {
    console.log(error, 'MongoDB 연결 실패!');
  }
};

mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});
module.exports = connect;
