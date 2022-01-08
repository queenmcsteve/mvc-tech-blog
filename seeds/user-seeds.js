const { User } = require("../models");

const userData = [
  {
    username: "huey",
    password: "jesuswasblack",
    user_id: 1,
  },
  {
    username: "riley",
    password: "nosnitching",
    user_id: 2,
  },
  {
    username: "granddad",
    password: "newshoes",
    user_id: 3,
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
