const router = require("express").Router();

const { Blog } = require("../models");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
});

router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  if (!req.blog) {
    const err = new Error(`can't find blog with id ${req.params.id}`);
    err.status = "fail";
    err.statusCode = 404;
    next(err);
  }
  next();
};

router.get("/:id", blogFinder, async (req, res) => {
  if (req.blog) {
    res.json(req.blog);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", blogFinder, async (req, res) => {
  if (req.blog) {
    await req.blog.destroy();
  }
  res.status(204).end();
});

router.put("/:id", blogFinder, async (req, res, next) => {
  if (!req.body.incLike && !req.body.decLike) {
    const err = new Error(`need to inc or dec like count`);
    err.status = "fail";
    err.statusCode = 400;
    next(err);
  } else {
    req.blog.likes += req.body.incLike ? 1 : -1;
    await req.blog.save();
    res.json({ likes: req.blog.likes });
  }
});

module.exports = router;
