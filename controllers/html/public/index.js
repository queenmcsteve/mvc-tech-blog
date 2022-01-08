const { Post, User, Comment } = require("../../../models");
const { findByPk } = require("../../../models/Comment");
const withAuth = require("../../middleware");
const router = require("express").Router();

// get all posts
router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    attributes: ["id", "title", "content", "user_id", "createdAt"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
    ],
  });
  const posts = postData.map((post) => {
    return (plainPost = post.get({ plain: true }));
  });
  console.log(posts);
  res.render("home", { posts, loggedIn: req.session.loggedIn });
});

// get post by id
router.get("/post/:id", async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: Comment,
        as: "comments",
        attributes: ["user_id", "comment_text", "post_id", "createdAt"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["username"],
          },
        ],
      },
    ],
  });
  const post = postData.get({ plain: true });
  console.log(post);
  res.render("post", { post, loggedIn: req.session.loggedIn });
});

// go to signup/login page
router.get("/signup-login", (req, res) => {
  res.render("signup");
});

// get current users posts
router.get("/dashboard", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  const postData = await Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render("dashboard", { posts });
});

// load new post page
router.get("/api/post/new", withAuth, async (req, res) => {
  res.render("new-post");
});

// edit post
router.get("/api/post/edit/:id", withAuth, async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    attributes: ["title", "content", "id"],
  });
  const post = postData.get({ plain: true });
  res.render("edit-post", { post });
});

// post comment
router.get("/api/comment/new", withAuth, async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {});
  res.render("post", { post, loggedIn: req.session.loggedIn });
});

module.exports = router;
