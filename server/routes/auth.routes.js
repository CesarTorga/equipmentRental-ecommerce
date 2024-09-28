const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
// Add other authentication routes (e.g., register, logout)

module.exports = router;