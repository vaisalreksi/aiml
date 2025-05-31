# AI/ML REST API Service

A Node.js REST API service that provides various AI/ML capabilities including chat, image generation, video generation, music generation, and speech processing.

## Table of Contents

- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
  - [Chat API](#chat-api)
  - [Image Generation API](#image-generation-api)
  - [Video Generation API](#video-generation-api)
  - [Music Generation API](#music-generation-api)
  - [Speech Processing API](#speech-processing-api)

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment example file and update with your credentials:

```bash
cp env.example .env
```

4. Start the development server:

```bash
npm run dev
```

## Environment Variables

```plaintext
AIML_HOST_URL=https://api.aimlapi.com/v1
AIML_API_KEY=your_api_key_here
```

## Project Structure

The project follows the MVC (Model-View-Controller) architecture pattern:

```plaintext
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
├── app.js             # Application entry point
├── .env               # Environment variables
└── package.json       # Project dependencies
```

## API Documentation

Detailed API documentation is available at: [Postman Collection](https://www.postman.com/satellite-astronaut-70142172/github/collection/r3bfnd5/restful-api-ai-ml?action=share&creator=33757963)

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
