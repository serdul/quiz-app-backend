const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz'); // Import Quiz model
const { getFeedback } = require('../controllers/openaiController'); // Import OpenAI controller

// Route to upload a quiz (POST /api/quiz/upload)
router.post('/upload', async (req, res) => {
  try {
    const quiz = new Quiz(req.body); // Create a new quiz
    await quiz.save(); // Save quiz to MongoDB
    res.status(201).json({ message: 'Quiz uploaded successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to submit quiz answers (POST /api/quiz/submit)
router.post('/submit', async (req, res) => {
  const { userAnswers } = req.body; // Get user answers from request body
  try {
    const feedback = await getFeedback(userAnswers); // Get feedback from OpenAI
    res.status(200).json({ feedback }); // Send feedback as response
  } catch (error) {
    res.status(500).json({ error: 'Error processing your answers' });
  }
});

module.exports = router; // Export router to use in server.js
