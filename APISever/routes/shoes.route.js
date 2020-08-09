const express = require('express');
const router = express.Router();
const shoesController = require('../controllers/shoes.controller');

router.get('/', shoesController.Get);
router.post('/add', shoesController.Add);
router.patch('/update/:shoeId', shoesController.Update);
router.delete('/delete/:shoeId', shoesController.Delete);
router.get('/search/:shoeName', shoesController.Search);
router.get('/:shoeId', shoesController.ShoeDetail);

module.exports = router;