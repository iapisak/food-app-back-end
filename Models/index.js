const mongoose = require('mongoose');
const port = process.env.MONGODB_URI || 'mongodb://localhost:27017/myRestaurant';

mongoose.connect(port, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(`MongoDB connection error": ${err}`));

module.exports = {
    User: require('./User'),
    Restaurant: require('./Restaurant'),
}