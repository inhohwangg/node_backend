const Food = require('../schema/food');
const dayjs = require('dayjs');

// 메뉴 생성 기능
const dinerCreate = async (req, res) => {
  try {
    const now = dayjs();
    let createDate = now.format('YYYY-MM-DD HH:mm:ss');
    const { userId } = req.query;
    const { restaurantName, menuName, desc } = req.body;
    await Food.create({
      userId,
      restaurantName,
      menuName,
      desc,
      createAt: createDate,
    });
    let list = await Food.find();
    res.status(201).json(list);
  } catch (error) {
    console.log(error, 'error ouccur');
    res.status(400).json(error);
  }
};

// 메뉴 조회 기능
const menuGet = async (req, res) => {
  try {
    let list = await Food.find();
    res.status(200).json(list);
  } catch (error) {
    console.log(error, 'error ouccur');
    res.status(400).json(error);
  }
};

// 메뉴 수정 기능
const dinerPut = async (req, res) => {
  try {
    const { foodId } = req.query;
    const { restaurantName, menuName, desc } = req.body;
    await Food.updateOne(
      { foodId: foodId },
      { $set: { restaurantName, menuName, desc } }
    );
    let list = await Food.find();
    res.status(200).json(list);
  } catch (error) {
    console.log(error, 'error ouccur');
    res.status(400).json(error);
  }
};

// 메뉴 삭제 기능
const dinerDelete = async (req, res) => {
  try {
    const { foodId } = req.query;
    await Food.deleteOne({ foodId });
    let list = await Food.find();
    res.status(200).json(list);
  } catch (error) {
    console.log(error, 'error ouccur');
    res.status(400).json(error);
  }
};

// 메뉴 랜덤 생성하기
const Random = async (req, res) => {
  try {
    let list = await Food.find();
    let rand = Math.floor(Math.random() * list.length);
    let foodIds = rand;
    let result = await Food.findOne({ foodId: foodIds });
    await res.status(200).json([result]);
  } catch (error) {
    console.log(error, 'errorr ouccur');
    res.status(400).json(error);
  }
};

module.exports = {
  dinerCreate,
  menuGet,
  dinerPut,
  dinerDelete,
  Random,
};
