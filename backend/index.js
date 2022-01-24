// The purpose of this web service is to connect to a mongodb database which contains emissions and trade treaty data for countries
// in the European Union and North America. At the end of this project I will attach this data to highcharts to visualize the data
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
// dotenv is an npm extension used to configure environment variables. I use this in place of a config folder
require('dotenv').config()
const corsOptions = {
    origin : "*",
    methods: "GET, PUT, POST, DELETE"
}

const app = express()
const port = process.env.PORT
const mongoURL = process.env.DB_HOST

const jsonParser =  bodyParser.json()
app.use(helmet())
app.use(jsonParser)
app.use(cors(corsOptions))

var naRoute = require('./routes/euRoute')
var euRoute = require('./routes/naRoute')

app.use('/', euRoute)
app.use('/', naRoute)

mongoose.connection.once("open", ()=>{
    console.log(`MongoDB database connection established successfully`)
})

app.listen(port,() => {
    console.log(`Web Service Listening on port ${port}`)
    console.log(`Connecting to Database: ${mongoURL}`)
    mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
})

