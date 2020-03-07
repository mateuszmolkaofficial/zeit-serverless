exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .index()
      .primary();
    table
      .string('email')
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
