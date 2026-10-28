const express = require('express');

const router = express.Router();

const controller = require('../controllers/productController');

router.get('/', controller.allProducts);

router.post('/', controller.newProduct);

router.get('/:id', controller.productById)


module.exports = router;