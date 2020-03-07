exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.text('smartText').alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.string('smartText').alter();
  });
};
