/*
Step 1:
Convert PDF to PNG with https://ezgif.com/pdf-to-jpg/

Step 2:
Run `node convert.js directory slide`

Step 3:
Got slide-1.jpg, slide-2.jpg, slide-3.jpg, ....
*/

const fs = require('fs')
const dir = process.argv[2]
const type = !process.argv[3] ? 'paper' : process.argv[3]
const files = fs.readdirSync(dir)
console.log(files)
console.log(type)

let i = 1
for (let file of files) {
  let id = i < 10 ? '0' + i.toString(): i.toString()
  let name = `${type}-${id}.jpg`
  fs.renameSync(`${dir}/${file}`, `${dir}/${name}`)
  i++
}