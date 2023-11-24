const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/", (request, response) => {
  const newBlog = request.body;

  const blog = new Blog({
    title: newBlog.title,
    author: newBlog.author,
    url: newBlog.url,
    likes: newBlog.likes,
  });

  blog
    .save()
    .then((newBlog) => {
      response.json(newBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogRouter;
