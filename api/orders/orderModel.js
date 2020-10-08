const db = require('../../data/db-config');

const getAllOrders = async () => {
  return await db('orders');
};

const getOrderById = async (id) => {
  return await db('orders').where({ id }).first();
};

module.exports = {
  getAllOrders,
  getOrderById,
};
