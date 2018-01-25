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
      .insert({
        title: req.body.title,
        eventlink: req.body.eventlink,
        month: req.body.month,
        day: req.body.day,
        city: req.body.city,
        state: req.body.state,
        host: req.body.host
      }, '*')
        .then((event) => {
          res.json(event)
    })
  }
}
