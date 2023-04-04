const express = require('express');
const app = require('express')();
const mongoConnect = require('./schema/index');
const helmet = require('helmet');
const morgan = require('morgan');

mongoConnect();
// 라우터 불러오기
const postRouter = require('./routes/post');
const foodRouter = require('./routes/food');
const userRouter = require('./routes/user');

// 각종 미들웨어
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 연결
app.use('/api', [postRouter, foodRouter, userRouter]);

app.get('/', (req, res) => {
  res.send('잘 작동하는듯');
});

app.listen(3001, () => {
  console.log('3001 port Backend Server Start!');
});
