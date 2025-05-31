const axios = require('axios');
const config = require('../config/config');

class ImageService {
  constructor() {
    this.client = axios.create({
      baseURL: config.aiml.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.aiml.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async generateImage(imageModel) {
    try {
      imageModel.validate();
      const response = await this.client.post('/images/generations', imageModel.toJSON());
      return response.data;
    } catch (error) {
      throw new Error(`Image Generation Error: ${error.message}`);
    }
  }
}

module.exports = new ImageService();