const router = require("express").Router();
const mailRoutes = require("./emailMail.js");
const voteRoutes = require("./vote.js");
const mailFriend1Routes = require("./mailFriend1.js")

// Book routes
router.use("/email_mail", mailRoutes);
router.use("/vote", voteRoutes);
router.use("/mail_friend1", mailFriend1Routes);

module.exports = router;