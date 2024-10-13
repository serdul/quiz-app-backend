require('dotenv').config(); // Load environment variables
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const cors = require('cors'); // Import CORS
const quizRoutes = require('./routes/quizRoutes'); // Import quiz routes

const app = express(); // Initialize Express app
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Setup API routes
app.use('/api/quiz', quizRoutes); // Mount quiz routes under /api/quiz

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
