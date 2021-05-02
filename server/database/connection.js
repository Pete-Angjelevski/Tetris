const environment = process.env.NODE_ENV || 'development'
console.log(process.env.NODE_ENV)
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = connection
