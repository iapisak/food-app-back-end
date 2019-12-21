const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    },

    signup_date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('User', UserSchema);