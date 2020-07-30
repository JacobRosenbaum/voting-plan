const router = require("express").Router();
const voteController = require("../../controller/voteController");

// Matches with "/api/books"
router.route("/")
  .post(voteController.create)

module.exports = router;