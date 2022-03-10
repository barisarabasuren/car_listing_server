const { getAllCars, addCar, getCar, updateReviewed } = require('../modals/cars.model')

const httpGetAllCars = async (req, res) => {
    return res.status(200).json(await getAllCars());
}

const httpAddCar = async (req, res) => {
    await addCar(req.body);
    return res.status(201).json('created')
}

const httpGetCar = async(req, res) => {
    id = req.params.id;

    const car = await getCar(id);
    return res.status(200).json(car);
}

const httpUpdateReviewed = async (req, res) => {
    await updateReviewed(req.body.id);
    return res.status(200).json('updated')

}

module.exports = {
    httpGetAllCars,
    httpAddCar,
    httpGetCar,
    httpUpdateReviewed
}