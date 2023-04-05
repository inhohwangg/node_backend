const express = require('express');
const router = express.Router();
const User = require('../schema/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const snowflake = require('node-snowflake').Snowflake;
require('dotenv').config();

//! 회원가입 API
router.post('/signup', async (req, res) => {
  try {
    const { userId, password, name } = req.body;

    // 입력값 유효성 검사
    if (!userId || !password || !name) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // userId 생성
    // const snowflakeId = snowflake.nextId().toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    // 유저 정보 저장
    const user = new User({
      userId: userId,
      password: hashedPassword,
      name,
    });
    await user.save();

    // 토큰 생성
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({ userId, password, token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ result: false });
  }
});

//! 로그인 API
router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;
    console.log(userId, password);
    // 입력받은 userId를 이용하여 User 모델에서 해당 유저 정보를 찾아냅니다.
    const user = await User.findOne({ userId });
    console.log(user);
    // 해당 유저 정보가 없으면 에러를 반환합니다.
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    // 입력받은 password와 해당 유저의 비밀번호를 비교합니다.
    const isMatch = await bcrypt.compare(password, user.password);

    // 비밀번호가 일치하지 않으면 에러를 반환합니다.
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    // JWT 토큰을 생성합니다.
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // 유저 정보와 토큰을 함께 반환합니다.
    res.status(200).json({ user, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
