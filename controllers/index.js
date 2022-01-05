const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html/public/");
const privateRoutes = require("./html/private");
const withAuth = require("./middleware");

router.use("/api", apiRoutes);
//router.use("/", withAuth, privateRoutes);
router.use("/", htmlRoutes);
// router.use("/", homeRoutes);

module.exports = router;
