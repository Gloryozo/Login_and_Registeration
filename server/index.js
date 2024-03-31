const express = require('express')
const cors = require('cors')
const {registerRouter } = require('./routes/loginRegister.js')

const port = 3001
const app = express()
app.use(cors())

app.use('/',registerRouter)

app.listen(port)