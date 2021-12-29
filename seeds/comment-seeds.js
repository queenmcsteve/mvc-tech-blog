const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "shut your mouth boy",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "so you're protecting the guy who stole your bike?",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I want an allowance",
    user_id: 2,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
