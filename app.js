require('./db/connect')
require('dotenv').config()

const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
    try {
        // Connection string from .env file
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`serv is listening on port ${port}`))
    } catch (error)
     {
       console.log(error)
     }}

     
start()
