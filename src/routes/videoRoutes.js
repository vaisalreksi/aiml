const express = require('express');
const VideoController = require('../controllers/VideoController');

const router = express.Router();

router.post('/generate', VideoController.initiateGeneration.bind(VideoController));
router.get('/status/:generationId', VideoController.checkStatus.bind(VideoController));

module.exports = router;