// dependencies
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// api routers
const userRouter = require('../users/usersRouter')

// express
const server = express()

// server set-up
server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server up.' })
})

server.use('/api/users', userRouter)

module.exports = server
