const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  let num1 = req.body.first
  let num2 = req.body.second
  let result = Number(num1) + Number(num2)
  res.send('Post req incoming:' + result)
})

app.listen(port, () => console.log('Server running on port 30000'))
