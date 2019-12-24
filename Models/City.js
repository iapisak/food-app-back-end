const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citySchema = new Schema({
    postal_code: String,
    name: String,
    restaurant: Array,
    photo: {
        type: String,
        default: 'https://campbellchamber.net/wp-content/uploads/2015/07/screen-shot-2014-04-24-at-20134-pm750xx1247-704-0-195.png',
    }
})

module.exports = mongoose.model('City', citySchema);