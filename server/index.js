var express = require('express')
var app = express()
const path = require('path')

const http = require('http')
// const https = require('https')

const port = parseInt(process.env.PORT, 10) || 3000
// const sslPort = parseInt(process.env.PORT, 10) || 3001

app.use(express.static(`${__dirname}/../build`))

http.createServer(app).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
})
// https.createServer(sslOptions, expressApp).listen(sslPort, (err) => {
//     if (err) throw err
//     console.log(`> Ready on https://localhost:${sslPort}`)
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})