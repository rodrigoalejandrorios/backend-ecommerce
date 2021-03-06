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

const single = async (_, res) => {
  try {
  } catch (e) {}
};

//VALIDAR COMPRA

const approvePurchases = async (products) => {
  const productsList = products.map(({ id, price, quantity }) =>
    Product.find({
      _id: product.id,
      price: product.price,
      stock: { gte: product.quantity },
      enable: true,
    })
  );

  const [approvePurchasesResult] = await Promise.all(productsList);
  if (approvePurchasesResult.length) return true;
  return false;
};

//DISMINUIR STOCK

const updateStock = async (products) => {
  try {
    const result = products.map(({ id, quantity }) => {
      Product.findByIdAndUpdate(
        { id },
        {
          $inc: { stock: -quantity },
        }
      );
    });
    const [updatedStock] = await Promise.all(result);
    throw new Error("Ocurrió un error sobre la actualización de stock");
  } catch (e) {
    console.error(e);
  }
};

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
