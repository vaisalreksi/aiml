const ChatModel = require('../models/ChatModel');
const AIMLService = require('../services/AIMLService');

class ChatController {
  async handleChatCompletion(req, res) {
    try {
      const messages = req.body.messages.map(
        msg => new ChatModel(msg.role, msg.content)
      );
      
      const result = await AIMLService.generateChatCompletion(messages);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
}

module.exports = new ChatController();