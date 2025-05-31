const MusicModel = require('../models/MusicModel');
const MusicService = require('../services/MusicService');

class MusicController {
  async generateMusic(req, res) {
    try {
      const musicModel = new MusicModel(req.body);
      const result = await MusicService.generateMusic(musicModel);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  async getMusicStatus(req, res) {
    try {
      const { generationId } = req.params;
      const result = await MusicService.getMusicStatus(generationId);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  async downloadMusic(req, res) {
    try {
      const { generationId } = req.params;
      const audioBuffer = await MusicService.downloadMusic(generationId);
      
      res.set({
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': `attachment; filename="music-${generationId}.mp3"`
      });
      res.send(Buffer.from(audioBuffer));
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = new MusicController();