const express = require('express')
const app = express()

var counter = 1

app.get('/', function (req, res) {
  res.json({
    counter: counter
  })
})

app.get('/increment', function (req, res) {
  counter = counter + 1
  res.json({
    counter: counter
  })
})

app.get('/decrement', function (req, res) {
  counter = counter - 1
  res.json({
    counter: counter
  })
})

app.listen(3000, err => {
  if (err) {
    throw err
  }

  console.log('server is listening')
})
