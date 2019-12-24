const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
    name: String,
    restaurant_id: String,
    menu: Array,
})

module.exports = mongoose.model('Menu', MenuSchema);