const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById); // New route for product details

module.exports = router;