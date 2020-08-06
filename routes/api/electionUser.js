const router = require("express").Router();
const electionController = require("../../controller/electionController");

router.route("/")
  .post(electionController.create)

module.exports = router;