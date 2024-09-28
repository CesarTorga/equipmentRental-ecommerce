//Ponto de entrada do servidor
const express = require('express');
const cors = requires('cors');
const app = express();
const port = 5500;

// ... (Require routes and middleware)
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
// const storeRoutes = require('./routes/store.routes');

app.use(cors()); 
// Or, configure CORS for specific origins:
// app.use(cors({
//   origin: 'http://localhost:5500' // Allow requests from this origin
// }));

// Middleware
app.use(express.json());

// Use Routes
app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes);
// app.use('/api/stores', storeRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});