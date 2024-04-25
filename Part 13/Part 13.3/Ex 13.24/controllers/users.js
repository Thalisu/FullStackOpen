const router = require("express").Router();

const { User } = require("../models");

const { tokenExtractor, isAdmin } = require("../util/middleware");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Blog,
        attributes: { exclude: ["userId"] },
      },
      {
        model: Team,
        attributes: ["name", "id"],
        through: { attributes: [] },
      },
    ],
  });
  res.json(users);
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: [''] } ,
    include:[{
        model: blog,
        attributes: { exclude: ['userId'] }
      },
      {
        model: Blog,
        as: 'marked_blogs',
        attributes: { exclude: ['userId']},
        through: {
          attributes: []
        },
        include: {
          model: user,
          attributes: ['name']
        }
      },
    ]
  })

  if (!user) {
    return res.status(404).end()
  }


  let teams = undefined
  if (req.query.teams) {
    teams = await user.getTeams({
      attributes: ['name'],
      joinTableAttributes: []  
    })
  }
  res.json({ ...user.toJSON(), teams })
})

router.put("/:username", async (req, res) => {
  const user = await User.findOne({
    where: { username: req.params.username },
  });
  if (user) {
    user = req.body;
    user.save();
    res.json(user);
  } else {
    res.status(404).end();
  }
});

router.put("/:username", tokenExtractor, isAdmin, async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.params.username,
    },
  });

  if (user) {
    user.disabled = req.body.disabled;
    await user.save();
    res.json(user);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
