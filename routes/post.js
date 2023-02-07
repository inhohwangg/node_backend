const express = require('express');
const router = express.Router();
const {
  postCreate,
  postRead,
  postModify,
  postDelete,
} = require('../controller/post');

router.post('/postCreate', postCreate);

router.get('/postRead', postRead);

router.put('/postModify', postModify);

router.delete('/postDelete', postDelete);

module.exports = router;
