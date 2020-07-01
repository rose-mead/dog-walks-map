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

function getWalk(id, db = connection) {
    return db('walks').where('id', id).first()
    .then(walk => {
        walk.coordinates = JSON.parse(walk.coordinates)
        return walk
    })
}

function getSearchResults(difficulty, db = connection) {
    return db('walks').where('difficulty', difficulty)
    .then(walks => {
        return walks.map(walk => {
            walk.coordinates = JSON.parse(walk.coordinates)
            console.log("in DB func", walk)
            return walk
        })
    })
}

module.exports = {
    getWalks, 
    getWalk,
    getSearchResults
}