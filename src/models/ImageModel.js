class ImageModel {
  constructor(prompt, model = 'flux/schnell', size = { width: 1024, height: 1024 }) {
    this.prompt = prompt;
    this.model = model;
    this.size = size;
  }

  toJSON() {
    return {
      model: this.model,
      prompt: this.prompt,
      width: this.size.width,
      height: this.size.height
    };
  }

  validate() {
    if (!this.prompt || typeof this.prompt !== 'string') {
      throw new Error('Prompt is required and must be a string');
    }
    if (!this.model || typeof this.model !== 'string') {
      throw new Error('Model is required and must be a string');
    }
    if (!this.size || !this.size.width || !this.size.height) {
      throw new Error('Size must include both width and height');
    }
  }
}

module.exports = ImageModel;