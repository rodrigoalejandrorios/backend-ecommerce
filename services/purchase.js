const Purchase = require("../models/Purchase");
const { approvePurchases, updateStock } = require("../controllers/products");
const { calculeTotals } = require("../utils/purchase");
const { createTicket } = require("../utils/pdfGen");

const uuid = require("node-uuid");

const newPurchase = async (req) => {
  try {
    const idOps = uuid();
    const { products } = req.body;
    const purchase = new Purchase(products);
    purchase.users = req.id;
    purchase.idOps = idOps;
    const validPurchase = await approvePurchases(products);
    if (!validPurchase) return "INVALID_PURCHASE";
    const total = calculeTotals(products);
    purchase.total = total;
    await purchase.save();
    await updateStock(products);

    createTicket(idOps, products, total);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { newPurchase };
