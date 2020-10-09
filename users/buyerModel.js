const DB = require('../data/dbConfig.js');

module.exports = {
  findBuyer,
  findBuyerById,
  findOrder,
  addOrder,
  updateOrder,
  removeOrder,
};

function findBuyer() {
  return db('buyer');
}

function findBuyerById(id) {
  return db('buyer').where({ id }).first();
}

function findOrder(orderId) {
  return DB('buyer as B')
    .join('order as O', 'O.buyerId', 'B.id')
    .select(
      'O.id',
      'B.contactName',
      'B.email',
      'B.organizationName',
      'B.contactPhone',
      'O.contactName',
      'O.contactPhone',
      'O.organizationWebsite',
      'O.soapBarNum',
      'O.address',
      'O.address',
      'O.country',
      'O.beneficiariesNum',
      'O.hygieneSituation',
      'O.hygieneInitiative',
      'O.comments'
    )
    .where('B.id', orderId)
    .orderBy('O.id');
}

function addOrder(order, buyerId) {
  return db('order')
    .insert(order, buyerId)
    .then((ids) => {
      return findOrder(ids[0]);
    });
}
