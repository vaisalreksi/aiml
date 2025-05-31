const express = require('express');
const multer = require('multer');
const SpeechController = require('../controllers/SpeechController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/transcribe', upload.single('audio'), SpeechController.handleSpeechToText.bind(SpeechController));
router.post('/synthesize', SpeechController.handleTextToSpeech.bind(SpeechController));

module.exports = router;