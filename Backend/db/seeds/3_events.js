
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: "Women in Tech Brown Bag Luncheon", eventlink:"https://www.eventbrite.com/e/women-in-tech-brown-bag-luncheon-tickets-41713569409?aff=es2", month:"FEB", day: 7, city:"Bellingham", state:"Washington", host:"Technology Alliance Group for NW Washington (TAG)"},
        {title: "Brand Differentiation Strategies", eventlink:"https://www.eventbrite.com/e/brand-differentiation-strategies-tickets-42372889453?aff=es2", month:"FEB", day: 7, city:"Seattle", state:"Washington", host:"Women in Product"},
        {title: "HealthTech Women NYC: Kick of the New Year Happy Hour!", eventlink:"https://www.eventbrite.com/e/healthtech-women-nyc-kick-of-the-new-year-happy-hour-tickets-42102912946?aff=es2", month:"FEB", day: 8, city:"Scottsdale", state:"Arizona", host:"Girls in Tech: Phoenix"},
        {title: "Girls in Tech Phoenix Origin Series: Fireside Chat", eventlink:"https://www.eventbrite.com/e/girls-in-tech-phoenix-origin-series-fireside-chat-tickets-41497423912", month:"FEB", day: 8, city:"New York", state:"New York", host:"HealthTech Women"},
        {title: "Black Tech Women NYC - Wine & #Wins: 2018 Vision Board Workshop", eventlink:"https://www.eventbrite.com/e/black-tech-women-nyc-wine-wins-2018-vision-board-workshop-tickets-42031532445?aff=es2", month:"FEB", day: 8, city:"New York", state:"New York", host:"Black Tech Women"},
        {title: "SHP GirlTech Movie Screening", eventlink:"https://www.eventbrite.com/e/shp-girltech-movie-screening-tickets-40911749143?aff=es2", month:"FEB", day: 9, city:"Atherton", state:"California", host:"Sacred Heart Schools"},
        {title: "Startup Weekend Women Denver", eventlink:"https://www.eventbrite.com/e/startup-weekend-women-denver-tickets-39975423568?aff=es2", month:"FEB", day: 9, city:"Seattle", state:"Washington", host:"New Tech Northwest"},
        {title: "New Tech Settle - Women in Tech", eventlink:"https://www.eventbrite.com/e/new-tech-seattle-women-in-tech-feb-13-registration-38525614149?aff=es2", month:"FEB", day: 13, city:"Denver", state:"Colorado", host:"Techstarts StartUp Programs"},
        {title: "TechStyle & Girls in Tech Present: Females in Fashion & Technology", eventlink:"https://www.eventbrite.com/e/techstyle-girls-in-tech-present-females-in-fashion-technology-tickets-41533617167?aff=es2", month:"FEB", day: 15, city:"El Segundo", state:"California", host:"Girls in Tech Los Angeles"},
        {title: "Seattle Girl Geek Dinner #55", eventlink:"https://www.eventbrite.com/e/seattle-girl-geek-dinner-55-tickets-42292296397?aff=es2", month:"FEB", day: 15, city:"Redmond", state:"Washington", host:"Seattle Girl Geek Dinners"},
        {title: "Winning Women: Investing in Cryptocurrency & Blockchain Technologies", eventlink:"https://www.eventbrite.com/e/winning-women-investing-in-cryptocurrency-blockchain-technologies-tickets-41262341775?aff=es2", month:"FEB", day: 20, city:"New York", state:"New York", host:"NYWSE"},
        {title: "Austin Technology Council : Roundtable - Women in Tech", eventlink:"https://www.eventbrite.com/e/austin-technology-council-roundtable-women-in-tech-tickets-41460224648?aff=es2", month:"FEB", day: 22, city:"Austin", state:"Texas", host:"Austin Technology Council"},
        {title: "Woman in Tech Breakfast", eventlink:"https://www.eventbrite.com/e/women-in-tech-breakfast-tickets-41713653661?aff=es2", month:"FEB", day: 23, city:"San Fransico", state:"California", host:"General Assembly"},
        {title: "Girls in Tech Bootcamp: Intro to SQL", eventlink:"https://www.eventbrite.com/e/girls-in-tech-bootcamp-intro-to-sql-tickets-41809382990?aff=es2", month:"FEB", day: 24, city:"San Fransico", state:"California", host:"Girls in Tech: SF/SV"},
        {title: "Women's Leadership Camp", eventlink:"https://www.eventbrite.com/e/womens-leadership-camp-march-2nd-4th-2018-registration-36641835717?aff=es2", month:"MAR", day: 2, city:"Boulder", state:"Colorado", host:"MergeLane"},
        {title: "#BusinessGirlMagic Brunch & Learn NYC with Yasmin J. Mattox", eventlink:"https://www.eventbrite.com/e/businessgirlmagic-brunch-learn-nyc-with-yasmin-j-mattox-tickets-39990156635?aff=es2", month:"MAR", day: 10, city:"New York", state:"New York", host:"#100BusinessGirls"},
        {title: "2018 SXSW Women in Digital Event", eventlink:"https://www.eventbrite.com/e/2018-sxsw-women-in-digital-event-tickets-41507656518?aff=es2", month:"MAR", day: 12, city:"Austin", state:"Texas", host:"Women in Digital"},
        {title: "Curly Girl Picnic SXSW", eventlink:"https://www.eventbrite.com/e/curly-girl-picnic-sxsw-edition-tickets-42289127920?aff=es2", month:"MAR", day: 17, city:"Austin", state:"Texas", host:"Coco Bates"},
        {title: "Austin Technology Council : Roundtable - Women in Tech", eventlink:"https://www.eventbrite.com/e/austin-technology-council-roundtable-women-in-tech-tickets-41460279813?aff=es2", month:"MAR", day: 22, city:"Austin", state:"Texas", host:"Austin Technology Council"}
      ]);
    });
};
