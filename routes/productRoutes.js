const express = require("express");
const { getProducts, createProduct } = require("../controllers/productController");

const router = express.Router();

// Routes for product operations
router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
