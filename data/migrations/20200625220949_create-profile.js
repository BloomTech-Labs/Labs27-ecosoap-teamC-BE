exports.up = (knex) => {
  return knex.schema
    .createTable('administrator', function (table) {
      table.increments();
      table.string('email', 320).notNullable().unique();
      table.string('password').notNullable();
    })

    .createTable('buyer', function (table) {
      table.increments();
      table.string('email', 320).notNullable().unique();
      table.string('password').notNullable();
      table.string('organizationName').notNullable();
      table.string('organizationWebsite').notNullable();
      table.string('contactName').notNullable();
      table.string('contactPhone').notNullable();
      table.string('address').notNullable();
      table.string('country').notNullable();
    })

    .createTable('orders', function (table) {
      table.increments();
      table.string('organizationName').notNullable();
      table.string('organizationWebsite').notNullable();
      table.string('contactName').notNullable();
      table.integer('soapBarNum').notNullable();
      table.string('contactPhone').notNullable();
      table.string('contactEmail', 320).notNullable();
      table.string('address');
      table.string('country').notNullable();
      table.integer('beneficiariesNum').notNullable();
      table.string('hygieneSituation');
      table.string('hygieneInitiative').notNullable();
      table.string('comments');
      table.timestamps(true, true);
      table
        .integer('buyerId')
        .unsigned()
        .references('id')
        .inTable('buyer')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('order')
    .dropTableIfExists('buyer')
    .dropTableIfExists('administrator');
};
