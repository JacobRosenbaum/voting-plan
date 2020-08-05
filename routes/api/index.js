const router = require("express").Router();
const emailRoutes = require("./emailMail.js");
const mailRoutes = require("./mailUser.js");
const mailFriend1Routes = require("./mailFriend1.js");
const mailFriend2Routes = require("./mailFriend2.js");
const mailFriend3Routes = require("./mailFriend3.js");

// Book routes
router.use("/email_mail", emailRoutes);
router.use("/mail_user", mailRoutes);
router.use("/mail_friend1", mailFriend1Routes);
router.use("/mail_friend2", mailFriend2Routes);
router.use("/mail_friend3", mailFriend3Routes);

module.exports = router;