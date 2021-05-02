const connection = require('./connection')

module.exports = {
  getHighscores
}

function getHighscores (db = connection) {
  return db('highscore')
    .select()
}
