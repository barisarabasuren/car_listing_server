const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const cars = require('./cars.mongo')

const getAllCars = async () => {
    return await cars.find({}, {
        'id': 1, 'make': 1, 'model': 1, 'img': 1, 'price':1, '_id': 0
    })
}

const addCar = async (car) => {
    car.id = uuidv1()
    await cars.updateOne(
        {
            id: car.id
        }, {...car, reviewed: 0}, {
            upsert: true
        }
    )
}

const getCar = async (id) => {
    return await cars.findOne({id}, {
        '_id': 0, '__v': 0
    })
}

const updateReviewed = async (id) => {
    await cars.updateOne(
        {id: id},
        {$inc: {
                reviewed: 1
        }}
    )
}

module.exports = {
    getAllCars,
    addCar,
    getCar,
    updateReviewed,
}