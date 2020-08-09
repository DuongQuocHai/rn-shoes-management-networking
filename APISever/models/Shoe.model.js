const mongoose = require('mongoose');

const ShoesSchema = mongoose.Schema({
    name: {  type: String, required: true },
    images: { type: String, required: true },
    price: { type: Number , required: true},
    price_promotion: { type: Number  },
    description: { type: String },
    shop_info: { type: String },
    order_count: { type: Number  },
    rating: { type: Number  },
    total_rated: { type: Number  }
})
module.exports = mongoose.model('shoes', ShoesSchema)