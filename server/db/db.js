const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function addGame (game){
  return knex('games')
    .insert({category: game.category})
}

function addQuestion (data) {
  return knex('questions')
    .insert(data)
}

module.exports = {
  addGame,
  addQuestion
}

//put all the knex methods in this file, express use knex to talk to db.
