const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  profilePicture: {
    type: String, // URL or file path for uploaded images
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
