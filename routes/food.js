const express = require('express');
const router = express.Router();
const {
  dinerCreate,
  menuGet,
  dinerPut,
  dinerDelete,
  Random,
} = require('../controller/food');

router.post('/dinerCreate', dinerCreate);

router.get('/menuGet', menuGet);

router.put('/dinerPut', dinerPut);

router.delete('/dinerDelete', dinerDelete);

router.get('/Random', Random);

module.exports = router;
