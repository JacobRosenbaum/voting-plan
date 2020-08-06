const router = require("express").Router();
const mailController = require("../../controller/mailController");


router.route("/")
  .post(mailController.create)

module.exports = router;