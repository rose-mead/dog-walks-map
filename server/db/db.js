const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getWalks(db = connection) {
    console.log("in db function")
    return db('walks').select()
}

module.exports = {
    getWalks
}