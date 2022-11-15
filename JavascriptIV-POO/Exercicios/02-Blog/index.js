const Author = require("./Author");

const john = new Author("John Doe");

const post = john.addPost("Titulo", "Lorem Ipsum");

post.addComment("Pedro", "Good");
post.addComment("Lucas", "Cool");

console.log(john);
console.log(post);
