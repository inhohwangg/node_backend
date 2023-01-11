const express = require('express');
const router = express.Router();
const { postCreate, postRead } = require('../controller/post');

router.post('/postCreate', postCreate);

router.get('/postRead', postRead);

module.exports = router;
