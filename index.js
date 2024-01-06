const express = require('express')
const fs = require('fs')
const status = require('express-status-monitor')
const zlib = require('zlib')

const app = express()

app.use(status()) // localhost:2000/status

// fs.createReadStream('./text.txt').pipe(zlib.createGzip().pipe(fs.createReadStream('./sample.zip')))

app.get('/', (req, res)=>{
    res.send("<h1>Hello</h1>")
    // const stream = fs.createReadStream('/text.txt','utf-8')
    // const text = fs.readFile('/text.txt','utf-8')
    // stream.on('data', (chunk)=>{
    //     res.write(chunk)
    // })
    // stream.on('end', ()=> res.end())
})

app.listen(2000, ()=>{
    console.log('Server is running on PORT 2000')
})