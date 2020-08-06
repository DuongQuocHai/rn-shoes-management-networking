const mongoose = require('mongoose');

const ShoesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('shoes', ShoesSchema)