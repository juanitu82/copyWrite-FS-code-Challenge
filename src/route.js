const app = require('express').Router()
const controller = require('./controller')

app.get('/', controller)

module.exports = app
