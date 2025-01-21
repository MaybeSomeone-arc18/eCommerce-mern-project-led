require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("Server running on port 5000");
});


const productRoutes = require('./src/routes/productRoutes');

// Use the product routes
app.use('/api/products', productRoutes);

const { errorHandler } = require('./src/middlewares/errorMiddleware');

// Error-handling middleware
app.use(errorHandler);

// Handle undefined routes
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  });


  
  