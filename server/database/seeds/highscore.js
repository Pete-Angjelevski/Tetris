exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'Pete', highscore: 1000, ranking: 1 },
        { id: 2, name: 'Beau', highscore: 900, ranking: 2 },
        { id: 3, name: 'Amy', highscore: 800, ranking: 3 }
      ])
    })
}
