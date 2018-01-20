const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('events')
    .select()
    .then( events =>
      res.json(events))
  }
}
