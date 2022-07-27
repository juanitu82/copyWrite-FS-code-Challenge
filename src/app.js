const express = require('express')
const route = require('./route')
const app = express()

app.use('/iecho', route)

module.exports = app
