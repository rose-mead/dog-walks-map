const path = require('path')
const express = require('express')

const server = express()
const routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/home', routes)

module.exports = server
