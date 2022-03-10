const express = require('express');
const cors = require('cors')
const carsRouter = require('./routes/cars.router')

const app = express();

app.use(cors())

app.use(express.json());
app.use(carsRouter)

module.exports =  app;