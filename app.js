const express = require('express');
const config = require('./src/config/config');
const errorHandler = require('./src/middleware/errorHandler');
const chatRoutes = require('./src/routes/chatRoutes');
const imageRoutes = require('./src/routes/imageRoutes');
const videoRoutes = require('./src/routes/videoRoutes');
const musicRoutes = require('./src/routes/musicRoutes');
const speechRoutes = require('./src/routes/speechRoutes');

class App {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  setupMiddleware() {
    this.app.use(express.json());
  }

  setupRoutes() {
    this.app.use('/api/chat', chatRoutes);
    this.app.use('/api/images', imageRoutes);
    this.app.use('/api/videos', videoRoutes);
    this.app.use('/api/music', musicRoutes);
    this.app.use('/api/speech', speechRoutes);
  }

  setupErrorHandling() {
    this.app.use(errorHandler);
  }

  start() {
    this.app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  }
}

const server = new App();
server.start();