const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json()); 
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

const posts = [];

app.post("/", (req, res) => {
  const post = { 
    id: posts.length + 1,
    title: req.body["title"],
    content: req.body["content"],
    comments: []  
  };

  posts.push(post);
  console.log("post saved");
  res.status(201).json(post);
});


app.get("/", (req, res) => {
  res.json(posts);
});


app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
});


app.post("/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  const comment = {
    text: req.body["text"],
    date: new Date()
  };

  post.comments.push(comment);

  res.status(201).json(comment);
});


app.get("/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post.comments);
});