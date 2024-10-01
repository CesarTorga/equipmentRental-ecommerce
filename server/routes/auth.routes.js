const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users'); // Import user data
const jwtSecret = 'rentalLoginTest';
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);

// Logout Route
// logout = async (req, res) => {
//     const { email, password } = req.body;
  
//     console.log("Bateu aqui!")
// };

// router.get('/logout', async(req, res) => {
//     const { email, password } = req.body;
  
//     res.send("Bateu aqui!")
// }); 

module.exports = router;