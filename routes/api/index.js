const router = require("express").Router();
const mailRoutes = require("./emailMail.js");

// Book routes
router.use("/email_mail", mailRoutes);

module.exports = router;