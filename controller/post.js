const Post = require('../schema/posts');

const postCreate = async (req, res) => {
  try {
    const { title, content } = req.body;
    // const id = await Post.find({});
    // for (let i = 0; i < id.length; i++) {
    //   if (
    //     id[i].postId === false ||
    //     id[i].postId === null ||
    //     id[i].postId === undefined
    //   ) {
    //     let postId = 1;
    //     await Post.create({ title, content, postId });
    //   } else {
    //     let postId = postId + 1;
    //     await Post.create({ title, content, postId });
    //   }
    // }
    res.status(201).json({ title, content });
  } catch (error) {
    console.log(error, '게시글 생성 오류!');
    res.status(400).json({ result: false });
  }
};

const postRead = async (req, res) => {
  try {
    let list = await Post.find({});
    res.status(200).json({ result: true, list });
  } catch (error) {
    console.log(error, '게시글 조회 실패');
    res.status(400).json({ result: false });
  }
};

module.exports = { postCreate, postRead };
