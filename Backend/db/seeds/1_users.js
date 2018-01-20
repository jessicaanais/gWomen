
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstname: "Jessica", lastname: "Duarte", email: 'duarte.jezzica@gmail.com', password: "password1", photo:"https://thumbs.dreamstime.com/z/happy-stick-figure-white-background-vector-92404203.jpg", about: "Completing the web immersive program", cohort:"g66", location:"Phoenix, Az"} 
      ]);
    });
};
