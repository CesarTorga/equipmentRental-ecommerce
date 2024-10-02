const products = require('../data/products');

//getallProducts é o método pra buscar todos os products de products.js
exports.getAllProducts = (req, res) => {
  res.json(products);
};

//getProductId é o método pra buscar o product por Id
exports.getProductById = (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};