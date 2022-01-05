// authentication
const withAuth = (req, res, next) => {
  // console.log(req);
  if (!req.session.loggedIn) {
    res.redirect("/signup-login");
  } else {
    next();
  }
};

module.exports = withAuth;
