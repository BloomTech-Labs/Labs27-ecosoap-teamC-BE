const db = require('../../data/db-config');

const getAllOrders = async () => {
  return await db('orders');
};

const getOrderById = async (id) => {
  return await db('orders').where({ id }).first();
};

const createOrder = (order) => {
  return db("orders")
    .insert(order, "id")
    .then((ids) => {
      return getOrderById(ids[0]);
    });
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
};
