const VideoModel = require('../models/VideoModel');
const VideoService = require('../services/VideoService');

class VideoController {
  async initiateGeneration(req, res) {
    try {
      const { prompt, firstFrameImage, model } = req.body;
      const videoModel = new VideoModel(prompt, firstFrameImage, model);
      
      const result = await VideoService.initiateVideoGeneration(videoModel);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  async checkStatus(req, res) {
    try {
      const { generationId } = req.params;
      const result = await VideoService.checkGenerationStatus(generationId);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = new VideoController();