const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('jobs')
    .select()
    .then( jobs =>
      res.json(jobs))
  },
  addJob: function (req, res) {
    knex('jobs')
      .insert(req.body)
      .then(() => {
        knex('jobs')
          .select()
          .then(job => res.json(job))
    })
  }
}
