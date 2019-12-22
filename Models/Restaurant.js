const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    postal_code: String,
    result: Array,
})

module.exports = mongoose.model('Restaurant', RestaurantSchema);