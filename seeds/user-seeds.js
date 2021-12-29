const { User } = requier("../models");

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
    username: "grandad",
    password: "newshoes",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
