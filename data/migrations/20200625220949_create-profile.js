exports.up = (knex) => {
  return knex.schema
    .createTable('administrator', function (table) {
      table.string('email', 320).notNullable().unique();
      table.string('password').notNullable();
    })
    .createTable('buyer', function (table) {
      table.string('email', 320).notNullable().unique();
      table.string('password').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
