const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../middleware");
const sequelize = require("../../config/connection");

// GET posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "user_id"],
    include: [
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "comment_text", "user_id"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST post
router.post("/new", withAuth, (req, res) => {
  const content = req.content;
  console.log(req.body.user_id);
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
  })
    .then((newPost) => res.json(newPost))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PUT post
router.put("/edit/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE post
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
