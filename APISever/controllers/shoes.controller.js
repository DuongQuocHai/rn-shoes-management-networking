const Shoe = require('../models/Shoe.model');

module.exports.Get = async (req, res) => {
    try {
        const shoes = await Shoe.find();
        const resData = {
            "status": 200,
            "message": "Sucessfully!",
            "data": shoes
        }
        res.send(resData)
    } catch (err) {
        res.json({ message: err })
    }
}
module.exports.Add = async (req, res) => {
    try {
        const shoe = new Shoe({
            name: req.body.name,
            price: req.body.price,
            images: req.body.images,
            price_promotion: req.body.price_promotion,
            shop_info: req.body.shop_info,
            order_count: req.body.order_count,
            description: req.body.description,
            rating: req.body.rating,
            total_rated: req.body.total_rated
        })
        const saveShoe = await shoe.save();
        const resData = {
            "status": 200,
            "message": "Create sucessfully!",
            "data": saveShoe
        }
        res.send(resData);
    } catch (err) {
        res.json({ message: err })
    }
}
module.exports.Update = (req, res) => {
    try {
        Shoe.updateOne({ _id: req.params.shoeId },
            {
                $set: {
                    name: req.body.name,
                    price: req.body.price,
                    images: req.body.images,
                    price_promotion: req.body.price_promotion,
                    shop_info: req.body.shop_info,
                    order_count: req.body.order_count,
                    description: req.body.description,
                    rating: req.body.rating,
                    total_rated: req.body.total_rated
                }
            }, (err, req) => {
                if (!err) {
                    const resData = {
                        "status": 200,
                        "message": "Update sucessfully!",
                    }
                    res.send(resData);
                } else {
                    const resData = {
                        "status": 409,
                        "message": "Update Failed!",
                    }
                    res.send(resData)
                }
            });
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.Delete = async (req, res) => {
    try {
        Shoe.remove({ _id: req.params.shoeId }, (err, data) => {
            if (!err) {
                const resData = {
                    "status": 200,
                    "message": "Delete sucessfully!",
                }
                res.send(resData);
            } else {
                const resData = {
                    "status": 409,
                    "message": "Delete Failed!",
                }
                res.send(resData)
            }
        });
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.Search = async (req, res) => {
    try {
        // var query = { name: /abcc/ };
        const listShoes = await Shoe.find();
        var name = req.params.shoeName;
        var matchedShoes = listShoes.filter((shoe) => {
            return shoe.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1;
        })
        if (matchedShoes.length) {
            const resData = {
                "status": 200,
                "message": matchedShoes.length + " results",
                "data": matchedShoes
            }
            res.send(resData)
        } else {
            const resData = {
                "status": 500,
                "message": "Not found",
            }
            res.send(resData)
        }
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.ShoeDetail = async (req, res) => {
    try {
        const shoe = await Shoe.findById(req.params.shoeId);
        const resData = {
            "status": 200,
            "data": shoe
        }
        res.json(resData);
    } catch (err) {
        res.json({ message: err })
    }
}