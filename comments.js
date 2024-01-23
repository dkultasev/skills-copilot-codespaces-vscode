// Create web server
// Run: node comments.js
// View at: http://localhost:3000
// View at: http://localhost:3000/comments
// View at: http://localhost:3000/comments/1
// View at: http://localhost:3000/comments/2
// View at: http://localhost:3000/comments/3
// View at: http://localhost:3000/comments/4

// Load the express module
const express = require("express");

// Create an instance of express
const app = express();

// Load the comments module
const comments = require("./comments");

// Use the comments module
app.use("/comments", comments);

// Start listening for requests
app.listen(3000, () => {
  console.log("Server started on port 3000");
});