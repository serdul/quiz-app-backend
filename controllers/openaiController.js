const axios = require('axios'); // Axios for HTTP requests

// Function to get feedback from OpenAI API
exports.getFeedback = async (userAnswers) => {
  const prompt = `Evaluate the following answers: ${JSON.stringify(userAnswers)} and provide feedback.`;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 500,
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );
    return response.data.choices[0].text; // Extract feedback from response
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
  }
};
