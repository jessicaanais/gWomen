
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstname: "Jessica", lastname: "Duarte", username: "knownasjess", password: "jessica", photo:"https://thumbs.dreamstime.com/z/happy-stick-figure-white-background-vector-92404203.jpg", about: "Currently completing the web immersive program.", cohort:"66", state:"Arizona", linkedin:"https://www.linkedin.com/in/jessicaanais/", github:"https://github.com/jessicaanais"},
        {firstname: "Marie", lastname: "Walker", username: "mariewalker", password: "marie", photo:"https://media-exp2.licdn.com/media/AAMABADGAAwAAQAAAAAAAA7PAAAAJGRhOTllYjM3LWYxOGYtNGE5MS1hMTk3LWU2NDFjZDJiMDFhZg.jpg", about: "Working remotely for the next 2 months.", cohort:"66", state:"Arizona", linkedin:"https://www.linkedin.com/in/lmariewalker/", github:"https://github.com/LMarieWalker"},
        {firstname: "Barbara", lastname: "Doring", username: "barbaradoring", password: "barabara", photo:"https://media-exp2.licdn.com/media/AAEAAQAAAAAAAAziAAAAJDM5MzU3NjMxLTIwMWUtNDgwNC05MTU2LTNmZmJhNTYyYjNmMg.jpg", about: "Ready for a vacation.", cohort:"66", state:"Arizona", linkedin:"https://www.linkedin.com/in/barbaradoring/", github: "https://github.com/bdoring" },
        {firstname: "Andi", lastname: "Zitney", username: "andizitney", password: "andi", photo:"https://media-exp2.licdn.com/media/AAEAAQAAAAAAAA0iAAAAJGJmMTFkMzc1LTQ5YzQtNDk0Ny1iODhkLTAzM2U2ZDNhZTQyOQ.jpg", about: "ready for my next hiking adventure!", cohort:"66", state:"Arizona", linkedin:"https://www.linkedin.com/in/andizitney/", github:"https://github.com/azitney"},
        {firstname: "Ali", lastname: "Finney", username: "alifinney", password: "ali", photo:"https://media-exp2.licdn.com/media/AAIABADGAAwAAQAAAAAAAAomAAAAJDJlNjI5M2RmLWFmODAtNDQ1ZS05YjY0LTcwOTRhMGM1NmI5MA.jpg", about: "LOL - I'm available for hire as a full stack developer!", cohort:"66", state:"Arizona", linkedin:"https://www.linkedin.com/in/alexisfinney/", github:"https://github.com/DillyDaily"},
        {firstname: "Charlotte Anne", lastname: "Spencer", username: "charlottespencer", password: "charlotte", photo:"https://media-exp2.licdn.com/media/AAEAAQAAAAAAAAczAAAAJDQzYTkxM2ZhLTMwZjMtNDQxMS1hMThiLTMyZTVjNTQ3ZTY5Mw.jpg", about: "Capstones today", cohort:"66", state:"Arizona", linkedin: "https://www.linkedin.com/in/charlotte-anne-spencer/", github:"https://github.com/annieneedscoffee"}
      ]);
    });
};
