exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=> {
    table.increments();
    table.string('comment');
    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .index();
      table.integer("post_id")
        .notNullable()
        .references("id")
        .inTable("posts")
        .onDelete("cascade")
        .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
