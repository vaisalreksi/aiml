class ChatModel {
  constructor(role, content) {
    this.role = role;
    this.content = content;
  }

  toJSON() {
    return {
      role: this.role,
      content: this.content
    };
  }
}

module.exports = ChatModel;