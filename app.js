const express = require('express');
const app = require('express')();
const connect = require('./schema/index');
const helmet = require('helmet');
const morgan = require('morgan');

connect();

// 라우터 불러오기
const postRouter = require('./routes/post');

// 각종 미들웨어
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }));

// 라우터 연결
app.use('/api', [postRouter]);

app.get('/', (req, res) => {
  res.send('잘 작동하는듯');
});

app.listen(3000, () => {
  console.log('3000 port Backend Server Start!');
});
