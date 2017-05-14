
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('username').notNullable().unique()
    tbl.specificType('hashed_password', 'varchar(60)').notNullable()
    tbl.string('email').notNullable().unique()
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
