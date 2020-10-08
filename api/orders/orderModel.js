const db = require('../../data/db-config');

const getAllOrders = async () => {
  return await db('orders');
};

const getOrderById = async (id) => {
  return await db('orders').where({ id }).first();
};

const createOrder = async (order) => {
  return db('orders').insert(order).returning('*');
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
};
