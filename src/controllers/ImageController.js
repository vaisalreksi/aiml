const ImageModel = require('../models/ImageModel');
const ImageService = require('../services/ImageService');

class ImageController {
  async handleImageGeneration(req, res) {
    try {
      const { prompt, model, size } = req.body;
      const imageModel = new ImageModel(prompt, model, size);
      
      const result = await ImageService.generateImage(imageModel);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = new ImageController();