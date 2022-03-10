const express = require('express');
const { httpGetAllCars, httpAddCar, httpGetCar, httpUpdateReviewed } = require('./cars.controller');

const carsRouter = express.Router();

carsRouter.get('/cars', httpGetAllCars);
carsRouter.post('/cars', httpAddCar);
carsRouter.get('/cars/:id', httpGetCar);
carsRouter.put('/cars', httpUpdateReviewed)


module.exports = carsRouter;