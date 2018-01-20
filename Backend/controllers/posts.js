const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('posts')
    .select()
    .then( posts =>
      res.json(posts))
  }
}
