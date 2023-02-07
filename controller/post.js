const Post = require('../schema/posts');
const dayjs = require('dayjs');

// 게시글 생성기능
const postCreate = async (req, res) => {
  try {
    let now = dayjs();
    const { userId } = req.query;
    const { title, content } = req.body;
    let createDate = now.format('YYYY-MM-DD HH:mm:ss');
    console.log(createDate);
    await Post.create({ userId, title, content, createAt: createDate });
    const list = await Post.find();
    res.status(201).json({ list });
  } catch (error) {
    console.log(error, '게시글 생성 오류!');
    res.status(400).json({ result: false });
  }
};

// 게시글 조회기능
const postRead = async (req, res) => {
  try {
    let list = await Post.find({});
    res.status(200).json(list);
  } catch (error) {
    console.log(error, '게시글 조회 실패');
    res.status(400).json({ result: false });
  }
};

// 게시글 수정기능
const postModify = async (req, res) => {
  try {
    const { postId } = req.query;
    const { title, content } = req.body;
    let now = dayjs();
    let createDate = now.format('YYYY-MM-DD HH:mm:ss');
    await Post.updateOne(
      { postId: postId },
      { $set: { title, content, updateAt: createDate } }
    );
    let result = await Post.find({ postId });
    res.status(200).json({ result });
  } catch (error) {
    console.log(error, 'postModift error ouccur');
    res.status(400).json({ result: 'error ouccur' });
  }
};

// 게시글 삭제기능
const postDelete = async (req, res) => {
  try {
    const { postId } = req.query;
    await Post.deleteOne({ postId });
    let list = await Post.find();
    res.status(200).json({ list });
  } catch (error) {
    console.log(error, 'error ouccur');
    res.status(400).json('error ouccur');
  }
};
module.exports = { postCreate, postRead, postModify, postDelete };
