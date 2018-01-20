const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('jobs')
    .select()
    .then( jobs =>
      res.json(jobs))
  }
}
