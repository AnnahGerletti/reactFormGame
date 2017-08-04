var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var route = require('./routes/newgames.js')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/v1/games',route)

module.exports = server
//attaching the routes to the setver, first part is the url prefix/
