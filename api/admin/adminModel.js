const db = require('../../data/db-config');

function findByAdmin(filter) {
  return db('administrator').where(filter);
}

function addAdmin(admin) {
  return db('administrator')
    .insert(admin, 'id')
    .then((ids) => {
      return findAdminByID(ids[0]);
    });
}

function findAdminByID(id) {
  return db('administrator').where({ id }).first();
}

module.exports = {
  findByAdmin,
  addAdmin,
  findAdminByID,
};
