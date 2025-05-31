const axios = require('axios');
const config = require('../config/config');

class MusicService {
  constructor() {
    this.client = axios.create({
      baseURL: config.aiml.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.aiml.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async generateMusic(musicModel) {
    try {
      musicModel.validate();
      const response = await this.client.post('/v1/music/generate', musicModel.toJSON());
      return response.data;
    } catch (error) {
      throw new Error(`Music Generation Error: ${error.message}`);
    }
  }

  async getMusicStatus(generationId) {
    try {
      const response = await this.client.get(`/v1/music/status/${generationId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Music Status Check Error: ${error.message}`);
    }
  }

  async downloadMusic(generationId) {
    try {
      const response = await this.client.get(`/v1/music/download/${generationId}`, {
        responseType: 'arraybuffer'
      });
      return response.data;
    } catch (error) {
      throw new Error(`Music Download Error: ${error.message}`);
    }
  }
}

module.exports = new MusicService();