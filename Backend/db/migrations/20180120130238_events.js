
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table)=> {
    table.increments();
    table.string('title');
    table.string('eventlink');
    table.string('month');
    table.integer('day');
    table.string('city');
    table.string('state');
    table.string('host');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
