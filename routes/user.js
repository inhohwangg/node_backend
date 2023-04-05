const express = require('express');
const router = express.Router();
const User = require('../schema/user');
const jwt = require('jsonwebtoken');
const secretKey = process.env.key;
require('dotenv').config();

//! 회원가입 API
router.post('/signup', async (req, res) => {
  try {
    const { userId, password, name } = req.body;
    const user = new User({ userId, password, name });
    await user.save();

    const token = jwt.sign({ userId: user._id });

    res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ result: false });
  }
});

//! 로그인 API
router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    const user = await User.findOne({ userId });
    console.log(user);

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    // const isMatch = await user.comparePassword(password);

    // if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
    console.log('this?');
    const token = jwt.sign({ userId: user.userId }, secretKey);
    console.log('this????');
    if (
      userId == '' ||
      userId == null ||
      userId == undefined ||
      password == '' ||
      password == null ||
      password == undefined
    )
      throw Error;
    res.status(200).json({ userId, password, token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ result: false });
  }
});

module.exports = router;
