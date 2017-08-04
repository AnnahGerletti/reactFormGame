var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getWidgets())
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  res.sendStatus(200)
})

router.delete('/:id', function (req, res){
  db.deleteWidget(req.params.id)
  res.sendStatus(204)
})

module.exports = router

// dont use this one, express  routers charlotts web