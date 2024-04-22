const router = require("express").Router();

const { Blog, User } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll({
    attributes: { exclude: ["userId"] },
    include: {
      model: User,
      attributes: ["name"],
    },
    where: {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: req.query.search ? `%${req.query.search}%` : "%%",
          },
        },
        {
          author: {
            [Op.iLike]: req.query.search ? `%${req.query.search}%` : "%%",
          },
        },
      ],
    },
    order: [["likes", "DESC"]],
  });
  res.json(blogs);
});

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
    } catch {
      return res.status(401).json({ error: "token invalid" });
    }
  } else {
    return res.status(401).json({ error: "token missing" });
  }
  next();
};

router.post("/", tokenExtractor, async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const blog = await Blog.create({
      ...req.body,
      userId: user.id,
      date: new Date(),
    });
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
  const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
  if (decodedToken.id !== req.blog.userId) {
    return response.status(401).json({ error: "token invalid" });
  }
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
