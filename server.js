require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const productRoutes= require('./routes/product-routes');
const bookRoutes= require('./routes/book-routes');

const app = express();
const PORT = process.env.PORT || 3000;

// connect to dB
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((e) => console.log("MongoDB connection failed:", e));

// middleware
app.use(express.json());
// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware/handler
});

// routes
app.use('/products', productRoutes);
app.use('/books', bookRoutes);


app.listen(PORT, () => {
    console.log(`Server running successfully on PORT: ${PORT}`);
});