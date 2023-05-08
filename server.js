const fs = require('fs')
const http = require('http')

// Reading files
// const text = fs.readFileSync('./text.txt', 'utf-8')

// const text2 = `This is my the line i writei winter: ${text} \n On: ${Date.now()}`

// fs.writeFileSync('./text2.txt', text2)

// console.log('Done')

// Server

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
