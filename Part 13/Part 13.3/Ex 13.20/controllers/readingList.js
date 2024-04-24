const router = require("express").Router();

const { User, ReadingList } = require("../models");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: ReadingList,
        attributes: { exclude: ["userId"] },
      },
    ],
  });
  res.json(users);
});

module.exports = router;
