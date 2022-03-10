const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    reviewed: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Car', carsSchema)