const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('comments')
    .select()
    .then( comments =>
      res.json(comments))
  }
}
