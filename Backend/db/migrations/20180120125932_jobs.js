
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', (table)=> {
    table.increments();
    table.string('position');
    table.string('description');
    table.string('link');
    table.string('contact');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
