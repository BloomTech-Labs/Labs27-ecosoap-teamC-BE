const db = require('../../data/db-config');

const getAllOrders = async () => {
  return await db('order');
};

const getOrderById = async (id) => {
  return await db('order').where({ id }).first();
};

const createOrder = (orderInfo) => {

  return db('order')
    .insert(orderInfo, 'id')
    .then((ids) => {
      return getOrderById(ids[0]);
    });
};

const deleteOrder = (id) => {
  return getOrderById(id).then(del => {
    return db("order")
      .where({id})
      .del()
      .then(() => {
        return del
      })
  })
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder
};
