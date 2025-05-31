const express = require('express');
const MusicController = require('../controllers/MusicController');

const router = express.Router();

router.post('/generate', MusicController.generateMusic.bind(MusicController));
router.get('/status/:generationId', MusicController.getMusicStatus.bind(MusicController));
router.get('/download/:generationId', MusicController.downloadMusic.bind(MusicController));

module.exports = router;