const axios = require('axios');
const config = require('../config/config');

class AIMLService {
  constructor() {
    this.client = axios.create({
      baseURL: config.aiml.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.aiml.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async generateChatCompletion(messages) {
    try {
      const response = await this.client.post('/chat/completions', {
        model: 'gpt-4o',
        messages: messages.map(msg => msg.toJSON())
      });
      return response.data;
    } catch (error) {
      throw new Error(`AIML API Error: ${error.message}`);
    }
  }
}

module.exports = new AIMLService();