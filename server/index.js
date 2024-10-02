//Ponto de entrada do servidor
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
// const storeRoutes = require('./routes/store.routes');

app.use(cors()); 
app.use(express.json());

// app.use('/', (req, res, next) => {
//   console.log('Request received:', req.method, req.path);
//   next();
// });

// Use Routes
app.use('/', authRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});