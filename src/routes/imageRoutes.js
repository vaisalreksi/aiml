const express = require('express');
const ImageController = require('../controllers/ImageController');

const router = express.Router();

router.post('/generate', ImageController.handleImageGeneration.bind(ImageController));

module.exports = router;