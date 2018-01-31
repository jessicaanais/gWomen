const knex = require("../db/knex.js");

module.exports = {
  getIt: function(req, res){
    knex('admin')
    .select()
    .then( admin =>
      res.json(admin))
  }
}
