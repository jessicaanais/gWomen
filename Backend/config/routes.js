const users = require("../controllers/users.js");
const jobs = require("../controllers/jobs.js");
const events = require("../controllers/events.js");
const posts = require("../controllers/posts.js");
const comments = require("../controllers/comments.js");

module.exports = function(app){

  //users

  app.get('/users', users.getAll);

  //jobs

  app.get('/jobs', jobs.getAll);

  app.post('/jobs', jobs.addJob);

  app.delete('/jobs/:id', jobs.removeJob)

  //events

  app.get('/events', events.getAll);

  app.post('/events', events.addEvent);

  app.delete('/events/:id', events.removeEvent);

  //posts

  app.get('/posts', posts.getAll);

  //posts

  app.get('/comments', comments.getAll);

}
