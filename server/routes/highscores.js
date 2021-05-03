const express = require('express')
const db = require('../database/dbHelpers')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getHighscores()
    .then(scores => {
      res.json({ scores })
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve scores'
        }
      })
    })
})

router.post('/', (req, res) => {
  const newHighscore = req.body

  db.addHighscore(newHighscore)
    .then(highscores => {
      res.json(highscores)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add score'
        }
      })
    })
})
