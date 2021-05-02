const connection = require('./connection')

module.exports = {
  getHighscores
}

function getHighscores (db = connection) {
  return db('highscore')
    .select()
    .then(results => {
      return results.sort((a, b) => b.highscore - a.highscore)
    })
}
