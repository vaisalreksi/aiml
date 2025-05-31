const { SpeechToTextModel, TextToSpeechModel } = require('../models/SpeechModel');
const SpeechService = require('../services/SpeechService');

class SpeechController {
  async handleSpeechToText(req, res) {
    try {
      if (!req.file) {
        throw new Error('Audio file is required');
      }

      const speechToTextModel = new SpeechToTextModel({
        audioData: req.file.buffer,
        ...req.body
      });

      const result = await SpeechService.convertSpeechToText(speechToTextModel);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  async handleTextToSpeech(req, res) {
    try {
      const textToSpeechModel = new TextToSpeechModel(req.body);
      const audioBuffer = await SpeechService.convertTextToSpeech(textToSpeechModel);

      res.set({
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="speech.mp3"'
      });
      res.send(Buffer.from(audioBuffer));
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = new SpeechController();