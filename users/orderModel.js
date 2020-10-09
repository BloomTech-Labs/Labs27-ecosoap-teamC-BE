const DB = require('../data/dbConfig.js');

module.exports = {
  findOrder,
  findOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
};

function findOrder() {
  return DB('order');
}

function findOrderById(id) {
  return DB('order').where({ id }).first();
}

function addOrder(order) {
  return db('order')
    .insert(order, 'id')
    .then((ids) => {
      return findById(ids[0]);
    });
}

function updateOrder(changes, id) {
  return DB('order').where({ id }).update(changes);
}

function deleteOrder(id) {
  return DB('order').where({ id }).del();
}
