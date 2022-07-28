const express = require('express')
const route = require('./route')
const app = express()
const cors = require('./config')
const corsd = require('cors')

app.use(cors)
app.use(corsd())
app.use('/iecho', route)

module.exports = app
