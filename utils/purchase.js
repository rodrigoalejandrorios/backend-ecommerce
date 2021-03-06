const calculeTotals = (products) =>
  products
    .map(({ price, quantity }) => price * quantity)
    .reduce((prev = 0, cur) => prev + cur);

module.exports = { calculeTotals };
