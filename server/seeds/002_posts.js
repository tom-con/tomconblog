exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([{
        id: 1,
        title: 'Testpost 1',
        body: 'Bacon ipsum dolor amet pork chop ham cupim beef ribs turkey flank cow t-bone bacon short ribs jowl. Prosciutto ham hock landjaeger, leberkas pancetta sirloin andouille pork loin tongue jowl boudin. Tenderloin picanha biltong sirloin flank ribeye doner jowl. Tenderloin ham hock kevin ground round chuck capicola turkey. Frankfurter pork loin kevin beef sirloin chuck pancetta porchetta shankle t-bone cupim prosciutto picanha fatback.',
        author: 1
      }, ]);
    }).then(() => {
      return knex.raw("SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));")
    });
};
