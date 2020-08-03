const router = require("express").Router();
const voteController = require("../../controller/voteController");


router.route("/")
  .post(voteController.create)

module.exports = router;