const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getWalks(db = connection) {
    return db('walks').select()
    .then(walks => {
        return walks.map(walk => {
            walk.coordinates = JSON.parse(walk.coordinates)
            return walk
        })
    })
}

module.exports = {
    getWalks
}