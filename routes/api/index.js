const router = require("express").Router();
const emailMailRoutes = require("./emailMail.js");
const mailRoutes = require("./mailUser.js");
const mailFriend1Routes = require("./mailFriend1.js");
const mailFriend2Routes = require("./mailFriend2.js");
const mailFriend3Routes = require("./mailFriend3.js");
const earlyRoutes = require ("./earlyUser.js");
const emailEarlyRoutes = require ("./emailEarly");
const electionRoutes = require ("./electionUser");
const emailElectionRoutes = require ("./emailElection");

// Vote by mail routes
router.use("/email_mail", emailMailRoutes);
router.use("/mail_user", mailRoutes);

// Mail Friends Routes
router.use("/mail_friend1", mailFriend1Routes);
router.use("/mail_friend2", mailFriend2Routes);
router.use("/mail_friend3", mailFriend3Routes);

// Vote in Person Early Routes
router.use("/early_user", earlyRoutes);
router.use("/email_early", emailEarlyRoutes);

// Vote on Election day Routes
router.use("/election_user/", electionRoutes);
router.use("/email_election/", emailElectionRoutes);

module.exports = router;