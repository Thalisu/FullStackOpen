const router = require("express").Router();

const { Blog } = require("../models");
const { sequelize } = require("../models/blog");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll({
    attributes: [
      "author",
      [sequelize.fn("COUNT", sequelize.col("title")), "articles"],
      [sequelize.fn("SUM", sequelize.col("likes")), "likes"],
    ],
    group: "author",
    raw: true,
  });
  res.json(blogs);
});

module.exports = router;
