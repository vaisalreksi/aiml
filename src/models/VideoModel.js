class VideoModel {
  constructor(prompt, firstFrameImage, model = 'video-01') {
    this.prompt = prompt;
    this.firstFrameImage = firstFrameImage;
    this.model = model;
  }

  toJSON() {
    return {
      model: this.model,
      prompt: this.prompt,
      first_frame_image: this.firstFrameImage
    };
  }

  validate() {
    if (!this.prompt || typeof this.prompt !== 'string') {
      throw new Error('Prompt is required and must be a string');
    }
    if (!this.firstFrameImage || typeof this.firstFrameImage !== 'string') {
      throw new Error('First frame image URL is required and must be a string');
    }
    if (!this.model || typeof this.model !== 'string') {
      throw new Error('Model is required and must be a string');
    }
  }
}

module.exports = VideoModel;