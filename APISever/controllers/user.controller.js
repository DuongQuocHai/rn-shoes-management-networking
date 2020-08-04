const User = require('../models/User.model');

module.exports.CheckValidPhone = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ phone: req.body.phone });
        console.log(user)
        if (user) {
            const resData = {
                "status": 200,
                "massage": "Số điện thoại tồn tại",
            }
            res.send(resData);
        } else {
            const resData = {
                "status": 502,
                "massage": "Số điện thoại không tồn tại",
            }
            res.send(resData);
        }
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.Login = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ phone: req.body.phone });
        if (user) {
            if (user.password === req.body.password) {
                const resData = {
                    "status": 200,
                    "massage": "Login successful!",
                }
                res.send(resData);
            } else {
                const resData = {
                    "status": 409,
                    "massage": "Login Failed!",
                }
                res.send(resData);
            }
        } else {
            const resData = {
                "status": 502,
                "massage": "Số điện thoại không tồn tại",
            }
            res.send(resData);
        }
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.Register = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,
        })
        const saveUser = await user.save();
        const resData = {
            "status": 200,
            "massage": "Register sucessfully!",
            "data": saveUser
        }
        res.send(resData);
    } catch (err) {
        res.json({ message: err })
    }
}
