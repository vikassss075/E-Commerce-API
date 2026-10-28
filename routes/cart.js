const express = require('express');

const router = express.Router();

const controller = require('../controllers/cartController');

router.get('/:userId', controller.cartById);

router.post('/:userId', controller.cartAddition);


module.exports = router;