const { Post } = require("../models");

const postData = [
  {
    title: "Jesus was black....",
    content:
      "Jesus was black, Ronald Reagan was the devil, and the government is lying about 9/11",
    user_id: 3,
  },
  {
    title: "No snitching!",
    content: "I don't snitch! I can't talk to the Po-po.",
    user_id: 1,
  },
  {
    title: "Act like you got some class...",
    content:
      "Y'all need to start appreciating your Grandaddy! I went and spent your inheritance on this beauiful house in this neighborhood! And all I ask you to do is read the post title.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
