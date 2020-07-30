const router = require("express").Router();
const mailRoutes = require("./emailMail.js");
const voteRoutes = require("./vote.js");

// Book routes
router.use("/email_mail", mailRoutes);
router.use("/vote", voteRoutes);

module.exports = router;