const fs = require('fs')
const http = require('http')

// Reading files
// const text = fs.readFileSync('./text.txt', 'utf-8')

// const text2 = `This is my the line i writei winter: ${text} \n On: ${Date.now()}`

// fs.writeFileSync('./text2.txt', text2)

// console.log('Done')

// Server
const server = http.createServer((req, res) => {
  // console.log(req.url, req.headers)
  const url = req.url
  if (url === '/') {
    return res.end('Hii')
  }
  req.write('no hii')
})

server.listen(3000, () => {
  console.log('Server listening')
})
