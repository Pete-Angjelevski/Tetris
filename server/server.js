const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// ROUTES
const highscoreRoutes = require('./routes/highscore')

server.use('/api/v1/highscore', highscoreRoutes)

module.exports = server
