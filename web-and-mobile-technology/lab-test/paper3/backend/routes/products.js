const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products/search?q=term — Search by name or category
// TODO (Student): Implement this route ABOVE the GET /:id routes to avoid conflicts
// Hint: Use a case-insensitive regex on 'name' and 'category' with $or

// GET /api/products - Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/products - Create a new product
router.post('/', async (req, res) => {
  const { name, price } = req.body; // TODO (Student): Also destructure 'category', 'stock', 'inStock'

  const product = new Product({
    name,
    price,
    // TODO (Student): Also save 'category', 'stock', 'inStock'
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/products/:id

module.exports = router;
