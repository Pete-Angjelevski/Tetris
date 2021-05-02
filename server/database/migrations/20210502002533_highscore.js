exports.up = function (knex) {
  return knex.schema.createTable('highscore', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.binary('highscore')
    table.binary('ranking')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('highscore')
}
