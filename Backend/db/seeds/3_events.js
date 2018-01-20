
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: "Girls in Tech Phoenix Origin Series: Fireside Chat", eventlink:"https://www.eventbrite.com/e/girls-in-tech-phoenix-origin-series-fireside-chat-tickets-41497423912", date:"Febuary 8, 2017", location:"Scottsdale, AZ", host:"Girls in Tech: Phoenix"}
      ]);
    });
};
