class SpeechToTextModel {
  constructor({
    audioData,
    model = 'deepgram-01',
    language = 'en',
    format = 'wav'
  }) {
    this.audioData = audioData;
    this.model = model;
    this.language = language;
    this.format = format;
  }

  validate() {
    if (!this.audioData) {
      throw new Error('Audio data is required');
    }
    if (!this.model || typeof this.model !== 'string') {
      throw new Error('Model is required and must be a string');
    }
    if (!this.language || typeof this.language !== 'string') {
      throw new Error('Language is required and must be a string');
    }
  }
}

class TextToSpeechModel {
  constructor({
    text,
    model = 'openai-01',
    voice = 'default',
    speed = 1.0,
    pitch = 1.0
  }) {
    this.text = text;
    this.model = model;
    this.voice = voice;
    this.speed = speed;
    this.pitch = pitch;
  }

  validate() {
    if (!this.text || typeof this.text !== 'string') {
      throw new Error('Text is required and must be a string');
    }
    if (!this.model || typeof this.model !== 'string') {
      throw new Error('Model is required and must be a string');
    }
    if (this.speed < 0.5 || this.speed > 2.0) {
      throw new Error('Speed must be between 0.5 and 2.0');
    }
    if (this.pitch < 0.5 || this.pitch > 2.0) {
      throw new Error('Pitch must be between 0.5 and 2.0');
    }
  }
}

module.exports = { SpeechToTextModel, TextToSpeechModel };