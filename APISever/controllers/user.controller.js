const User = require('../models/User.model');
const md5 = require('md5')

module.exports.CheckValidPhone = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ phone: req.body.phone });
        console.log(user)
        if (user) {
            const resData = {
                "status": 502,
                "message": "Phone number has been registered",
            }
            res.send(resData);
        } else {
            const resData = {
                "status": 200,
                "message": "Phone number does't exist",

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
        console.log(user)
        if (user) {
            const hashPassword = md5(req.body.password);
            if (user.password === hashPassword) {
                const resData = {
                    "status": 200,
                    "message": "Login successful",
                    "data": user
                }
                res.send(resData);
            } else {
                const resData = {
                    "status": 409,
                    "message": "Wrong password!",
                }
                res.send(resData);
            }
        } else {
            const resData = {
                "status": 502,
                "message": "Phone number isn's registered!",
            }
            res.send(resData);
        }
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports.Register = async (req, res) => {
    try {
        const hashPassword = md5(req.body.password);
        const user = new User({
            name: req.body.name,
            phone: req.body.phone,
            password: hashPassword,
            urlAvatar: "https://chuoichin.com/wp-content/uploads/2019/01/avatar-den-13.jpg"
        })
        const saveUser = await user.save();
        const resData = {
            "status": 200,
            "message": "Register sucessfully!",
            "data": saveUser
        }
        res.send(resData);
    } catch (err) {
        res.json({ message: err })
    }
}
module.exports.Get = async (req, res) => {
    try {
        const users = await User.find();
        const resData = {
            "status": 200,
            "message": "Sucessfully!",
            "data": users
        }
        res.send(resData)
    } catch (err) {
        res.json({ message: err })
    }
}
