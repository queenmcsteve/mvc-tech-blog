const { User } = require("../models");

const userData = [
  {
    username: "huey",
    password: "jesuswasblack",
  },
  {
    username: "riley",
    password: "nosnitching",
  },
  {
    username: "granddad",
    password: "newshoes",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
