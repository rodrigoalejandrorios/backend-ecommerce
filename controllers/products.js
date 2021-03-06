const Product = require("../models/Product");

const all = async (_, res) => {
  try {
    const data = await find();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const simple = async (_, res) => {};

//LLAMA A LA LISTA EN GENERAL

const find = async (_id = null) => {
  try {
    if (_id) return await Product.findById(_id);
    return await Product.find();
  } catch (e) {
    throw e;
  }
};

const addProduct = async (req, res) => {
  try {
    const data = await req.body;
    return await Product.insertOne(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { all, addProduct };
