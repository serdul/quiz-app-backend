const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 }, // Track user's XP
  badges: { type: [String], default: [] }, // List of earned badges
});

// Hash password before saving user to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password isn't modified
  this.password = await bcrypt.hash(this.password, 10); // Hash password
  next();
});

module.exports = mongoose.model('User', userSchema); // Export User model
