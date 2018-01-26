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
      .insert({
        position: req.body.position,
        description: req.body.description,
        link: req.body.link,
        contact: req.body.contact
      }, '*')
        .then((job) => {
          console.log(job)
          res.json(job)
    })
  },
  removeJob: function(req, res){
    knex('jobs')
    .del()
    .where('id', req.params.id)
    .then(() => {
      console.log('active job')
      res.json({id: req.params.id})
    })
   }
}
