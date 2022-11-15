const Comment = require("./Comment");

class Post {
  constructor(title, body, author) {
    this.author = author;
    this.title = title;
    this.body = body;
    this.comments = [];
    this.createdAt = new Date();
  }

  addComment(username, comment) {
    this.comments.push(new Comment(username, comment));
  }
}

module.exports = Post;
