const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    restaurant: [
        {
            post_code: {
                type: String
            },

            result: {
                type: Array
            },
        }
    ]
})

module.exports = mongoose.model('Restaurant', RestaurantSchema);