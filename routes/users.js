const express = require('express');

const router = express.Router();

const controller = require('../controllers/usersController')

router.get('/', controller.allUsers);

router.post('/', controller.newUser);

router.get('/:id', controller.userById);


module.exports = router;