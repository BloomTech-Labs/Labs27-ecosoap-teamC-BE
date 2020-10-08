const db = require('../../data/db-config');

const getAllOrders = () => {
  return db('orders');
};

module.exports = {
  getAllOrders,
};
