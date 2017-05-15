exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([{
          id: 1,
          title: 'changes',
          tagline: 'See the world',
          description: 'A web app that shows changes to Earth over time using NASA\'s earth images API. Click anywhere on Google Maps and a GIF will be rendered showing the changes over time provided by satellite imagery. This was made over the course of 5hours at Galvanize\'s Hack-the-Planet event.',
          body: 'Blah',
          image_url: '/images/changes.png',
          deployment_url: 'http://changes.surge.sh',
          github_url: 'https://github.com/GracieChristine/earthchanges'
        },
        {
          id: 2,
          title: 'findHope',
          tagline: 'Connecting to help',
          description: 'A web app that links cancer patients to National Cancer Institute clinical trials based on patient eligibility and location. It also gives information about principal investigators and whether the trial is accepting volunteers.',
          body: 'Blah',
          image_url: '/images/findHope.png',
          deployment_url: 'http://tom-con-findhope.surge.sh',
          github_url: 'https://github.com/tom-con/findhope'
        },
        {
          id: 3,
          title: 'Mosaix',
          tagline: 'Pixel art social network',
          description: 'A web app with full CRUD ability built on RESTful principles that allows 2D game developers to create/edit/share sprites within a niche social network.',
          body: 'Blah',
          image_url: '/images/mosaix.png',
          deployment_url: 'http://mosaix.herokuapp.com',
          github_url: 'https://github.com/tom-con/mosaix'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));")
    });
};
