const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const getStats = await redis.getAsync("added_todos");
  console.log(getStats);
  res.send({ added_todos: getStats });
});

module.exports = router;
