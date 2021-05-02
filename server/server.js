const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// ROUTES
const highscoresRoutes = require('./routes/highscores')

server.use('/api/v1/highscores', highscoresRoutes)

module.exports = server
