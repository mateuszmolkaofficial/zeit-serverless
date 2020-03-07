exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.renameColumn('email', 'nickName');
    table.string('smartText');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.renameColumn('nickName', 'email');
    table.dropColumn('smartText');
  });
};
