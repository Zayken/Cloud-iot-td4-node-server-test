
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('TEEEEST!')
})


app.get('/test', function (req, res) {
  res.send('Ici c\'est une autre route')
})


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
