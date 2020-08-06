const router = require("express").Router();
const earlyController = require("../../controller/earlyController");

router.route("/")
  .post(earlyController.create)

module.exports = router;