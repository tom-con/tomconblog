exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          username: 'tomconwd',
          hashed_password: '$2a$12$dLYvB0wMeuNWHCqLvsPOHORE7FJiPl0FnMRBOqBiI31pLNXh7Miwi',
          email: 'tconchie@gmail.com'
        },
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
