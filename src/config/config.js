require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  aiml: {
    baseUrl: process.env.AIML_HOST_URL,
    apiKey: process.env.AIML_API_KEY
  }
};