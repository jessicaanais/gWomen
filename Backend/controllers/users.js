const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('users')
    .select()
    .then( users =>
      res.json(users))
  }
}
