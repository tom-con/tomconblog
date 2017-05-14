
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', tbl => {
    tbl.increments()
    tbl.string('title').notNullable().unique()
    tbl.text('body').notNullable()
    tbl.integer('author').notNullable().references('users.id')
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
