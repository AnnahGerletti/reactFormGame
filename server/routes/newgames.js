const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/', function(req,res){

  res.sendStatus(201)
  console.log(req.body)
})

router.post('/:game_id/questions', (req, res) => {
  db.addQuestion(req.body)
})

module.exports = router

//express routes posts, get, delete
