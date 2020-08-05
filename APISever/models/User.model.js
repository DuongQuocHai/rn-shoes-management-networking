const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    urlAvatar: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model('users', UserSchema)