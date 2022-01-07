// User Routes
const router = require("express").Router();
const { User } = require("../../models");

// signup/create user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login
router.post("/login", async (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then(async (dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No account found!" });
      return;
    }

    const passwordIsValid = await dbUserData.checkPassword(req.body.password);
    if (passwordIsValid) {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "You are now logged in!" });
        return;
      });
    } else {
      return res.status(401).json("Invalid password");
    }
  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
