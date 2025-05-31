const axios = require('axios');
const config = require('../config/config');

class SpeechService {
  constructor() {
    this.client = axios.create({
      baseURL: config.aiml.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.aiml.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async convertSpeechToText(speechToTextModel) {
    try {
      speechToTextModel.validate();
      const formData = new FormData();
      formData.append('audio', speechToTextModel.audioData);
      formData.append('model', speechToTextModel.model);
      formData.append('language', speechToTextModel.language);
      
      const response = await this.client.post('/v1/speech/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Speech-to-Text Error: ${error.message}`);
    }
  }

  async convertTextToSpeech(textToSpeechModel) {
    try {
      textToSpeechModel.validate();
      const response = await this.client.post('/v1/speech/synthesize', {
        text: textToSpeechModel.text,
        model: textToSpeechModel.model,
        voice: textToSpeechModel.voice,
        speed: textToSpeechModel.speed,
        pitch: textToSpeechModel.pitch
      }, {
        responseType: 'arraybuffer'
      });
      return response.data;
    } catch (error) {
      throw new Error(`Text-to-Speech Error: ${error.message}`);
    }
  }
}

module.exports = new SpeechService();