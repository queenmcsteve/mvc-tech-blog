const router = require("express").Router();
const { User, Comment, Post } = require("../../models");

// GET all comments
router.get("/", (req, res) => {
  Comment.findAll({
    attributes: ["id", "comment_text", "user_id", "post_id"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
    ],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET comment by id
router.get("/:id", (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST comment
router.post("/", (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
      //   user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// // PUT/update comment
// router.put("/:id", (req, res) => {
//   if (req.session) {
//     Comment.update(
//       {
//         comment_text: req.body.comment_text,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//       .then((dbCommentData) => res.json(dbCommentData))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
//   res.send(`Comment updated!`);
// });

// DELETE comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
