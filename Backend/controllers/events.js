const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('events')
    .select()
    .then( events =>
      res.json(events))
  },
  addEvent: function (req, res) {
    knex('events')
      .insert(req.body)
      .then(() => {
        knex('events')
          .select()
          .then(event => res.json(event))
    })
  }
}
