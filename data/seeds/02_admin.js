exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('administrator')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('administrator').insert([
        { email: 'firstadmin@ecosoap.com', password: 'first' },
        { email: 'secondadmin@ecosoap.com', password: 'second' },
        { email: 'thirdadmin@ecosoap.com', password: 'third' },
        { email: 'fourthadmin@ecosoap.com', password: 'fourth' },
        { email: 'fifthadmin@ecosoap.com', password: 'fifth' },
      ]);
    });
};
