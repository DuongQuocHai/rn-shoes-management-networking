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
            description: req.body.description,
            images: req.body.description
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
                    description: req.body.description,
                    images: req.body.description
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
        const removeShoe = await Shoe.remove({ _id: req.params.shoeId });
        if(removeShoe){
            res.send('Haha');
        }else{
            res.send('Huhu');
        }
        // res.json(removeShoe);
    } catch (err) {
        res.json({ message: err })
    }
}