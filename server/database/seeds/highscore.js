exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('highscore').del()
    .then(function () {
      // Inserts seed entries
      return knex('highscore').insert([
        { id: 1, name: 'Pete', highscore: 1000, ranking: 1 },
        { id: 2, name: 'Beau', highscore: 900, ranking: 2 },
        { id: 3, name: 'Amy', highscore: 800, ranking: 3 }
      ])
    })
}
