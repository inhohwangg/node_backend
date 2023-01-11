const Post = require('../schema/post');

const postCreate = async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = await Post.find({});
    console.log(id);
    await Post.create({ title, content });
    res.status(200).json({ result: true, title, content });
  } catch (error) {
    console.log(error, '게시글 생성 오류!');
    res.status(400).json({ result: false });
  }
};

const postRead = async (req, res) => {
  try {
    const read = await Post.find();
    res.status(200).json({ result: true, read });
  } catch (error) {
    console.log(error, '게시글 조회 실패');
    res.status(400).json({ result: false });
  }
};

module.exports = { postCreate, postRead };
