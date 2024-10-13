const mongoose = require('mongoose');

// Define schema for individual statements in a quiz
const statementSchema = new mongoose.Schema({
  text: String, // The statement/question text
  isCorrect: Boolean, // True or False (the correct answer)
});

// Define schema for a quiz
const quizSchema = new mongoose.Schema({
  title: String, // Quiz title
  statements: [statementSchema], // Array of statements
  createdAt: { type: Date, default: Date.now }, // Timestamp when the quiz was created
});

module.exports = mongoose.model('Quiz', quizSchema); // Export Quiz model
