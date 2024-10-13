const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz'); // Import the Quiz model

// Route to upload a quiz
router.post('/upload', async (req, res) => {
  try {
    const quiz = new Quiz(req.body); // Create a new quiz object from the request body
    await quiz.save(); // Save the quiz to MongoDB
    res.status(201).json({ message: 'Quiz uploaded successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Export the router to be used in server.js
module.exports = router;

