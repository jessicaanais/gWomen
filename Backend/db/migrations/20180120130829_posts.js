exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=> {
    table.increments();
    table.string('post');
    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
