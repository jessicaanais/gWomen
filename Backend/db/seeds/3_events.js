
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: "Women in Tech Brown Bag Luncheon", eventlink:"https://www.eventbrite.com/e/women-in-tech-brown-bag-luncheon-tickets-41713569409?aff=es2", date:"Febuary 7, 2018", city:"Bellingham", state:"Washington", host:"Technology"},
        {title: "Brand Differentiation Strategies", eventlink:"https://www.eventbrite.com/e/brand-differentiation-strategies-tickets-42372889453?aff=es2", date:"Febuary 7, 2018", city:"Seattle", state:"Washington", host:"Women in Product"},
        {title: "Girls in Tech Phoenix Origin Series: Fireside Chat", eventlink:"https://www.eventbrite.com/e/girls-in-tech-phoenix-origin-series-fireside-chat-tickets-41497423912", date:"Febuary 8, 2018", city:"Scottsdale", state:"Arizona", host:"Girls in Tech: Phoenix"},
        {title: "SHP GirlTech Movie Screening", eventlink:"https://www.eventbrite.com/e/shp-girltech-movie-screening-tickets-40911749143?aff=es2", date:"Febuary 9, 2018", city:"Atherton", state:"California", host:"Sacred Heart Schools"},
        {title: "Startup Weekend Women Denver", eventlink:"https://www.eventbrite.com/e/startup-weekend-women-denver-tickets-39975423568?aff=es2", date:"Febuary 9, 2018", city:"Seattle", state:"Washington", host:"New Tech Northwest"},
        {title: "New Tech Settle - Women in Tech", eventlink:"https://www.eventbrite.com/e/new-tech-seattle-women-in-tech-feb-13-registration-38525614149?aff=es2", date:"Febuary 13, 2018", city:"Denver", state:"Colorado", host:"Techstarts StartUp Programs"},
        {title: "TechStyle & Girls in Tech Present: Females in Fashion & Technology", eventlink:"https://www.eventbrite.com/e/techstyle-girls-in-tech-present-females-in-fashion-technology-tickets-41533617167?aff=es2", date:"Febuary 15, 2018", city:"El Segundo", state:"California", host:"Girls in Tech Los Angeles"},
        {title: "Seattle Girl Geek Dinner #55", eventlink:"https://www.eventbrite.com/e/seattle-girl-geek-dinner-55-tickets-42292296397?aff=es2", date:"Febuary 15, 2018", city:"Redmond", state:"Washington", host:"Seattle Girl Geek Dinners"},
        {title: "Austin Technology Council : Roundtable - Women in Tech", eventlink:"https://www.eventbrite.com/e/austin-technology-council-roundtable-women-in-tech-tickets-41460224648?aff=es2", date:"Febuary 22, 2018", city:"Austin", state:"Texas", host:"Austin Technology Council"},
        {title: "Woman in Tech Breakfast", eventlink:"https://www.eventbrite.com/e/women-in-tech-breakfast-tickets-41713653661?aff=es2", date:"Febuary 23, 2018", city:"San Fransico", state:"California", host:"General Assembly"},
        {title: "Girls in Tech Bootcamp: Intro to SQL", eventlink:"https://www.eventbrite.com/e/girls-in-tech-bootcamp-intro-to-sql-tickets-41809382990?aff=es2", date:"Febuary 24, 2018", city:"San Fransico", state:"California", host:"Girls in Tech: SF/SV"},
        {title: "Women's Leadership Camp", eventlink:"https://www.eventbrite.com/e/womens-leadership-camp-march-2nd-4th-2018-registration-36641835717?aff=es2", date:"March 2, 2018", city:"Boulder", state:"Colorado", host:"MergeLane"},
        {title: "2018 SXSW Women in Digital Event", eventlink:"https://www.eventbrite.com/e/2018-sxsw-women-in-digital-event-tickets-41507656518?aff=es2", date:"March 12, 2018", city:"Austin", state:"Texas", host:"Women in Digital"},
        {title: "Curly Girl Picnic SXSW", eventlink:"https://www.eventbrite.com/e/curly-girl-picnic-sxsw-edition-tickets-42289127920?aff=es2", date:"March 17, 2018", city:"Austin", state:"Texas", host:"Coco Bates"},
        {title: "Austin Technology Council : Roundtable - Women in Tech", eventlink:"https://www.eventbrite.com/e/austin-technology-council-roundtable-women-in-tech-tickets-41460279813?aff=es2", date:"March 22, 2018", city:"Austin", state:"Texas", host:"Austin Technology Council"}
      ]);
    });
};
