
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {position: "Jr Python Developer", description:"Career Evolutions is searching for a Jr. Python Developer for a fast growing hi-tech company based in Tempe, AZ . This is a full-time, direct-hire opportunity with compensation up to $70K plus benefits.", link: "https://www.indeed.com/jobs?q=Junior%20Developer&l=Phoenix%2C%20AZ&vjk=75896f65ed627ab6"}
      ]);
    });
};
