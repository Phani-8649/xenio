const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes Placeholder
app.use('/api/customers', require('./routes/customerroutes'));
app.use('/api/orders', require('./routes/orderRoutes.js'));
// app.use('/api/logs', require('./routes/logRoutes'));

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
