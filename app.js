const express = require('express');
const app = require('express')();
const connect = require('./schema/index');
const helmet = require('helmet');
const morgan = require('morgan');
const Post = require('../schema/post');

connect();

// 라우터 불러오기
const postRouter = require('./routes/post');
const post = require('./schema/post');

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

app.post('/test', async (req, res) => {
  try {
    const { title, content } = req.body;
    await Post.create({ title, content });
    res.status(201).json({ title, content });
  } catch (error) {
    console.log(error);
    res.status(400).json({ result: false });
  }
});

app.listen(3000, () => {
  console.log('3000 port Backend Server Start!');
});
