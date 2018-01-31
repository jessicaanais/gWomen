
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', (table)=> {
    table.increments();
    table.string('position');
    table.text('description');
    table.string('link');
    table.string('contact');
    table.string('location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
