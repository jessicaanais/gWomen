
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=> {
    table.increments();
    table.string('firstname');
    table.string('lastname');
    table.string('username');
    table.string('password');
    table.string('photo');
    table.string('about');
    table.string('cohort');
    table.string('state');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
