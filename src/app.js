const express = require('express');
const cors = require('cors')
const carsRouter = require('./routes/cars.router')

const app = express();

app.use(cors({
    origin: [
        'https://car-listing-umut.netlify.app',
        'http://localhost:3000'
    ]
}))

app.use(express.json());
app.use(carsRouter)

module.exports =  app;