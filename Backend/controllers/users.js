const knex = require("../db/knex.js");

module.exports = {
  getAll: function(req, res){
    knex('users')
    .select()
    .then( users =>
      res.json(users))
  },
  removeUser: function(req, res){
    knex('users')
    .del()
    .where('id', req.params.id)
    .then(() => {
      console.log('active user')
      res.json({id: req.params.id})
    })
   }
}
