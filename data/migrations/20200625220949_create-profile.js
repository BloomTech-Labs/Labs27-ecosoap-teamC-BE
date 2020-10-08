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
      table.integer('contactPhone').notNullable();
      table.string('address').notNullable();
      table.string('country').notNullable();
    })
    .createTable('orders', function (table) {
<<<<<<< HEAD
      table.increments();
=======
      table.uuid('id');
>>>>>>> cafe1710b2dff03857cdd279ebd971881d127eeb
      table.string('organizationName').notNullable();
      table.string('organizationWebsite').notNullable();
      table.string('contactName').notNullable();
      table.integer('soapBarNum').notNullable();
<<<<<<< HEAD
      table.string('contactPhone').notNullable();
      table.string('contactEmail', 320).notNullable();
=======
      table.integer('contactPhone').notNullable();
      table.string('contactEmail').notNullable();
>>>>>>> cafe1710b2dff03857cdd279ebd971881d127eeb
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
    .dropTableIfExists('orders')
    .dropTableIfExists('buyer')
    .dropTableIfExists('administrator');
<<<<<<< HEAD
};
=======
};
>>>>>>> cafe1710b2dff03857cdd279ebd971881d127eeb
