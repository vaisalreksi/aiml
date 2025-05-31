const axios = require('axios');
const config = require('../config/config');

class VideoService {
  constructor() {
    this.client = axios.create({
      baseURL: config.aiml.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.aiml.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async initiateVideoGeneration(videoModel) {
    try {
      videoModel.validate();
      const response = await this.client.post('/v2/generate/video/minimax/generation', videoModel.toJSON());
      return response.data;
    } catch (error) {
      throw new Error(`Video Generation Error: ${error.message}`);
    }
  }

  async checkGenerationStatus(generationId) {
    try {
      const response = await this.client.get('/v2/generate/video/minimax/generation', {
        params: { generation_id: generationId }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Video Status Check Error: ${error.message}`);
    }
  }
}

module.exports = new VideoService();