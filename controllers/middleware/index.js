// authentication
const withAuth = (req, res, next) => {
  // console.log(req);
  console.log("here" + req.session.loggedIn);
  if (!req.session.loggedIn) {
    res.redirect("/signup-login");
  } else {
    next();
  }
};

module.exports = withAuth;
