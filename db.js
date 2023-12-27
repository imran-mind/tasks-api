const mongoose = require('mongoose');

const connectToDB = async () => {
    const url = process.env.MONGODB_URL;
    try {
        await mongoose.connect(url);
        console.log('MongoDB Connected')
    } catch (err) {
        console.log('Error while MongoDB connection ', err);
    }
}

module.exports = connectToDB;