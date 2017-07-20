
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('title').notNullable().unique()
    tbl.string('tagline').notNullable()
    tbl.text('description').notNullable()
    tbl.text('body').notNullable()
    tbl.string('image_url').notNullable()
    tbl.string('deployment_url').notNullable()
    tbl.string('github_url').notNullable()
    tbl.string('video_url')
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
