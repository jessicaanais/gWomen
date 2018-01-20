
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table)=> {
    table.increments();
    table.string('title');
    table.string('eventlink');
    table.string('date');
    table.string('location');
    table.string('host');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
