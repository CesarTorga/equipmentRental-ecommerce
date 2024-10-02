const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users'); // Importa os dados do usuário
const jwtSecret = 'rentalLoginTest';
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);

module.exports = router;