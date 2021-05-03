const connection = require('./connection')

module.exports = {
  getHighscores,
  addHighscore
}

function getHighscores (db = connection) {
  return db('highscore')
    .select()
    .then(results => {
      return results.sort((a, b) => b.highscore - a.highscore)
    })
}

function addHighscore (newHighscore, db = connection) {
  return db('highscore')
    .insert({ name: newHighscore.name, highscore: newHighscore.highscore })
}
