const mongoose = require('mongoose');

const MONGO_URL_DEV = 'mongodb://127.0.0.1:27017/cars';
const MONGO_URL_DEP = 'mongodb+srv://barisarabasuren:dzI3Mh5LdGqe9mFt@carlisting.sqpak.mongodb.net/CarListing?retryWrites=true&w=majority'


mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!')
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

const mongoConnect = async (env) => {
    if(env === 'dev') {
        await mongoose.connect(MONGO_URL_DEV);
    } else {
        await mongoose.connect(MONGO_URL_DEP);
    }
    
}

const mongoDisconnect = async () => {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}