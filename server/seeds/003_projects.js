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
          deployment_url: 'https://changes.surge.sh',
          github_url: 'https://github.com/GracieChristine/earthchanges',
          video_url: ''
        },
        {
          id: 3,
          title: 'findHope',
          tagline: 'Connecting to help',
          description: 'A web app that links cancer patients to National Cancer Institute clinical trials based on patient eligibility and location. It also gives information about principal investigators and whether the trial is accepting volunteers.',
          body: 'Blah',
          image_url: '/images/findHope.png',
          deployment_url: 'https://tom-con-findhope.surge.sh',
          github_url: 'https://github.com/tom-con/findhope',
          video_url: 'https://www.youtube.com/watch?v=agYm6MlS4iM'
        },
        {
          id: 2,
          title: 'Mosaix',
          tagline: 'Pixel art social network',
          description: 'A web app with full CRUD ability built on RESTful principles that allows 2D game developers to create/edit/share sprites within a niche social network.',
          body: 'Blah',
          image_url: '/images/mosaix.png',
          deployment_url: 'https://mosaix.herokuapp.com',
          github_url: 'https://github.com/tom-con/mosaix',
          video_url: ''
        },
        {
          id: 4,
          title: 'Dicey',
          tagline: 'Choose your friends/words wisely',
          description: 'A Facebook-integrated web app where you and your friends collaborate to make a sentence. After it\'s finished, it gets randomly posted to one of your walls!',
          body: 'Blah',
          image_url:'',
          deployment_url: 'https://diceyy.herokuapp.com',
          github_url: 'https://github.com/tom-con/dicey',
          video_url: ''
        },
        {
          id: 5,
          title: 'File Explorer VR',
          tagline: 'A VR "productivity" tool',
          description: 'A standalone Windows app desgined to make organizing your file system easy and fun! Be transported into virtual reality and navigate your file system. Move files between different sub-directories or delete them entirely! Or just throw everything around in a virtual environment.',
          body: 'Blah',
          image_url:'/images/fileExplorer.png',
          deployment_url: '',
          github_url: '',
          video_url: 'https://www.youtube.com/watch?v=LBcvrbGrTrA'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));")
    });
};
