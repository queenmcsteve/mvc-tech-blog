# mvc-tech-blog

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description:

A blogging platform allowing users to create accounts, make/edit/delete posts, and leave comments.

## Table of contents:

- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)
- [License](#license)

# Installation

Run `npm i` to install dependencies; use the schema file to create the mysql database; then run `npm run start` to seed the data and start the application.

# Technologies

This application uses:

- Node.js
- Javascript
- JQUery
- HTML
- CSS5
- Bootstrap

It employs the following npm packages:

- handlebars
- mysql2
- sequelize
- express
- express-sessions
- bcrypt

# Usage

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

# Screenshots

Homepage (before login)
![screenshot](./public/screenshots/home.jpg)

Login/Signup
![screenshot](./public/screenshots/login-signup.jpg)

Dashboard
![screenshot](./public/screenshots/dashboard.jpg)

Edit/Delete Post
![screenshot](./public/screenshots/edit-post.jpg)

Homepage (after login)
![screenshot](./public/screenshots/home-loggedin.jpg)

Comment
![screenshot](./public/screenshots/comment.jpg)

# Demo

See the app deployed on Heroku [here](https://pacific-refuge-98850.herokuapp.com/).

# Contributing

Feel free to fork and clone.

# Tests

There are no tests for this application.

# Contact

If you have any questions you can reach me via:

- Github: [queen.mcsteve](https://github.com/queen.mcsteve)
- Email: [queen.mcsteve.666@gmail.com](mailto:queen.mcsteve.666@gmail.com)

# License

[This project is licensed under the terms of the MIT license.](https://opensource.org/licenses/MIT)
