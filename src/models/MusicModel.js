class MusicModel {
  constructor({
    prompt,
    model = 'music-01',
    duration = 30,
    tempo = 120,
    genre = 'classical',
    mood = 'happy'
  }) {
    this.prompt = prompt;
    this.model = model;
    this.duration = duration;
    this.tempo = tempo;
    this.genre = genre;
    this.mood = mood;
  }

  toJSON() {
    return {
      model: this.model,
      prompt: this.prompt,
      duration: this.duration,
      tempo: this.tempo,
      genre: this.genre,
      mood: this.mood
    };
  }

  validate() {
    if (!this.prompt || typeof this.prompt !== 'string') {
      throw new Error('Prompt is required and must be a string');
    }
    if (!this.model || typeof this.model !== 'string') {
      throw new Error('Model is required and must be a string');
    }
    if (!Number.isInteger(this.duration) || this.duration < 1 || this.duration > 300) {
      throw new Error('Duration must be an integer between 1 and 300 seconds');
    }
    if (!Number.isInteger(this.tempo) || this.tempo < 40 || this.tempo > 240) {
      throw new Error('Tempo must be an integer between 40 and 240 BPM');
    }
  }
}

module.exports = MusicModel;