const express = require('express');
const router = express.Router();
const User = require('../../models/User.model');
const userController = require('../../controllers/user.controller');

router.post('/checkValidPhone', userController.CheckValidPhone);
router.post('/login', userController.Login);
router.post('/register', userController.Register);

// router.patch('/:userId', async (req, res) => {
//     try {
//         const updateUser = await User.updateOne({ _id: req.params.userId },
//             {
//                 $set: {
//                     name: req.body.name,
//                     phone: req.body.phone,
//                 }
//             });
//         res.json(updateUser);
//     } catch (err) {
//         res.json({ message: err })
//     }
// })
// router.delete('/:userId', async (req, res) => {
//     try {
//         const removeUser = await User.remove({ _id: req.params.userId });
//         res.json(removeUser);
//     } catch (err) {
//         res.json({ message: err })
//     }
// })
// router.get('/:userId', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         res.json(user);
//     } catch (err) {
//         res.json({ message: err })
//     }
// })
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         const resData = {
//             "status": 200,
//             "massage": "Sucessfully!",
//             "data": users
//         }
//         res.send(resData)
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         const user = new User({
//             name: req.body.name,
//             phone: req.body.phone,
//             password: req.body.password,
//         })
//         const saveUser = await user.save();
//         const resData = {
//             "status": 200,
//             "massage": "Register sucessfully!",
//             "data": saveUser
//         }
//         res.send(resData);
//     } catch (err) {
//         res.json({ message: err })
//     }
//     // user.save().then(data => {
//     //     console.log(data)
//     //     const resData = {
//     //         "status": 200,
//     //         "massage": "create sucessfully!",
//     //         "data": data
//     //     }
//     //     res.send(resData);
//     // }).catch(err => {
//     //     res.json({ massage: err })
//     // })
// })



module.exports = router;