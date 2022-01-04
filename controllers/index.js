const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./auth");

router.use("/api", apiRoutes);
router.use("/user", userRoutes);
// router.use("/", homeRoutes);

module.exports = router;
