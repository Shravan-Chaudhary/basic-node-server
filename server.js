const fs = require('fs')

const text = fs.readFileSync('./text.txt', 'utf-8')

const text2 = `This is my the line i writei winter: ${text} \n On: ${Date.now()}`

fs.writeFileSync('./text2.txt', text2)

console.log('Done')
