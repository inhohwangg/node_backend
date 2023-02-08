const express = require('express');
const router = express.Router();
const {
  dinerCreate,
  menuGet,
  dinerPut,
  dinerDelete,
} = require('../controller/food');

router.post('/dinerCreate', dinerCreate);

router.get('/menuGet', menuGet);

router.put('/dinerPut', dinerPut);

router.delete('/dinerDelete', dinerDelete);

module.exports = router;
