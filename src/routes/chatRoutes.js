const express = require('express');
const ChatController = require('../controllers/ChatController');

const router = express.Router();

router.post('/completion', ChatController.handleChatCompletion.bind(ChatController));

module.exports = router;