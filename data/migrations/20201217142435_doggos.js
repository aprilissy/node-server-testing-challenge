
exports.up = function(knex) {
  return knex.schema.createTable('doggos', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.boolean('is_good_doggo').notNullable().defaultTo(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('doggos');
};
