const express = require('express');
const multer = require('multer');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

const upload = multer({ storage });

// File upload route
router.post('/', upload.single('file'), (req, res) => {
  res.status(201).json({
    message: 'File uploaded successfully',
    file: req.file,
  });
});

module.exports = router;
