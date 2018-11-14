'use strict'

const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');

router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.get('/getuserdata/:id', userController.getUserData);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;