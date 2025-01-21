const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const productRoutes = require("./routes/productRoutes"); // Import product routes
const userRoutes = require("./routes/userRoutes"); // Import user routes
const uploadRoutes = require("./routes/uploadRoutes"); // Import upload routes

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Enable SSL
    tls: true, // Enforce TLS for secure connection
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Use routes
app.use("/api/products", productRoutes); // Products route
app.use("/api/users", userRoutes); // Users route
app.use("/api/upload", uploadRoutes); // Upload route

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
